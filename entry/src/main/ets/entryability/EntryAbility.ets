import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window, promptAction, router} from '@kit.ArkUI';
import { webview } from '@kit.ArkWeb';  //引入webview
import { pagePushNotify, setSchemeHandler } from '@magongshou/harmony-cordova/Index';  //引入cordova sdk
import SFUemSDK, { SFSDKMode, SFSDKFlags, SFSDKExtras, SFLogoutType, SFBaseMessage } from 'SangforSDK';
import { BusinessError } from '@kit.BasicServicesKit';
import { notificationManager } from '@kit.NotificationKit';
import { pushService, pushCommon } from '@kit.PushKit';

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {
  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {

    //接收后台消息内容
    try {
      // receiveMessage()不能放在异步方法之后，否则可能影响执行
      pushService.receiveMessage('BACKGROUND', this, (data: pushCommon.PushPayload) => {
        // process message，并建议对Callback进行try-catch
        try {
          hilog.info(0x0000, 'backgroundTag', 'Receive background message', JSON.stringify(data));
        } catch (e) {
          let errRes: BusinessError = e as BusinessError;
          hilog.error(0x0000, 'backgroundTag', 'Failed to process data: %{public}d %{public}s', errRes.code, errRes.message);
        }
        hilog.info(0x0000, 'backgroundTag1', data.data);
        promptAction.showToast({
          message: '收到一条后台消息:'+ (JSON.parse(data.data)).data,
          duration: 5000
        });
      });
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'backgroundTag', 'Failed to get background message: %{public}d %{public}s', e.code, e.message);
    }

    this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
    webview.WebviewController.initializeWebEngine();//webview引擎初始化
    setSchemeHandler();//设置webview scheme
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');
    this.init();
    pagePushNotify(want.parameters);//点击通知消息传送数据给cordova，如果app没有鸿蒙推送功能，此行代码可以不加

    //获取push token
    try {
      pushService.getToken((err: BusinessError, data: string) => {
        if (err) {
          hilog.error(0x0000, 'testTag', 'Failed to get push token: %{public}d %{public}s', err.code, err.message);
        } else {
          hilog.info(0x0000, 'testTag', 'Succeeded in getting push token');
        }
        console.log('tokenTag1 '+data)
        console.log('tokenTag2 '+err)
      });
    } catch (err) {
      let e: BusinessError = err as BusinessError;
      hilog.error(0x0000, 'testTag', 'Failed to get push token: %{public}d %{public}s', e.code, e.message);
      console.log('tokenTag3 '+err)
    }

  }

  //增加onNewWant，app没有推送功能，可以不添加此函数
  onNewWant(want: Want): void {
    hilog.info(0x0000, 'testTag', 'Succeeded in getting message data');
    pagePushNotify(want.parameters);//点击通知消息传送数据给cordova
  }

  onDestroy(): void {
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/BasicScenePage', (err) => {
      if (err.code) {
        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');
      notificationManager.requestEnableNotification(this.context).then(() => {
        hilog.info(0x0000, 'testTag', `[ANS] requestEnableNotification success`);
      }).catch((err: BusinessError) => {
        hilog.error(0x0000, 'testTag', `[ANS] requestEnableNotification failed, code is ${err.code}, message is ${err.message}`);
      });
    });

  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');
  }

  /**
   * 注销结果回调
   * @param type      注销类型
   * @param message   注销信息
   */
  onLogout(type: SFLogoutType,  message: SFBaseMessage) {
    let reason = "";
    switch (type) {
      case SFLogoutType.SFLogoutTypeUser:
        reason = "用户注销";
        break;
      case SFLogoutType.SFLogoutTypeTicketAuthError:
        reason = "免密失败";
        break;
      case SFLogoutType.SFLogoutTypeServerShutdown:
        reason = "服务端注销";
        break;
      case SFLogoutType.SFLogoutTypeAuthorError:
        reason = "授权失败";
        break;
      default:
        reason = "未知";
        break;
    }

    //注销以后需要重新认证才能使用VPN和沙箱能力，此时根据您自己的需求可以给出提示或者跳转到登陆页面，此Demo的做法是提示并跳到首页，让用户可以重新登录
    this.showLogoutDialog(`注销原因 : ${reason} code:<${message.mErrCode}> desc<${message.mErrStr}>`);
  }

  init() {
    let extra: Map<SFSDKExtras, string>  = new Map<SFSDKExtras, string>();
    let sdkFlags: number = 0;
    sdkFlags = SFSDKFlags.FLAGS_HOST_APPLICATION;      //表明是单应用或者是主应用
    sdkFlags |= SFSDKFlags.FLAGS_VPN_MODE_TCP;              //表明使用VPN功能中的TCP模式
    // sdkFlags |= SFSDKFlags.FLAGS_VPN_MODE_L3VPN;            //设置VPN工作模式L3VPN模式
    SFUemSDK.getInstance().initSDK(
      this.context,
      SFSDKMode.MODE_VPN,
      sdkFlags, extra
    );

    console.log("SFSDKMode", SFSDKMode.MODE_VPN_SANDBOX);

    // 注册注销回调
    SFUemSDK.getInstance().registerLogoutListener(this);
  }

  public showLogoutDialog(content: string) {
    try {
      promptAction.showDialog({
        title: '注销',
        message: content,
        buttons: [
          {
            text: '确定',
            color: '#FF0000'
          }
        ],
      })
        .then(data => {
          console.info('showDialog success, click button: ' + data.index);
          router.back(1);
        })
        .catch((err:Error) => {
          console.info('showDialog error: ' + err);
        })
    } catch (error) {
      let message = (error as BusinessError).message
      let code = (error as BusinessError).code
      console.error(`showDialog args error code is ${code}, message is ${message}`);
    };
  }

}