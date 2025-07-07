import { CordovaPlugin,CordovaInterface, CallbackContext,CordovaWebView, MessageStatus, PluginResult} from '@magongshou/harmony-cordova/Index';
import { PromptAction } from '@kit.ArkUI';
import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export class TestPlugin extends CordovaPlugin {
  protected cordovaInterface?: CordovaInterface;
  protected cordovaWebView?: CordovaWebView;

  //插件初始化函数，初始化函数在页面显示前调用，因此在初始化中不能进行UI的相关操作。
  initialize(cordovaInterface: CordovaInterface, cordovaWebView:CordovaWebView):void {
    this.cordovaInterface = cordovaInterface;
    this.cordovaWebView = this.cordovaWebView;
    return;
  }

  execute(action: string, args: ESObject[], callbackContext: CallbackContext):boolean {
    if(action == "eayHello") {
      return this.eayHello(args, callbackContext);
    }

    if(action == "openSystemBrowser") {
      return this.openSystemBrowser(args, callbackContext);
    }

    if(action == "openOtherPage") {
      //系统路由功能，webview是根页面，跳转到原生的其他页面，具体使用参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/arkts-navigation-navigation-V5
      let pathStack:NavPathStack = this.cordovaInterface!.getPageStack();
      pathStack.pushPathByName("TestPage", "{test:10}");
    }

    if(action == "otherFunction") {
      //获取webview属性变量，用于动态修改webview属性,具体参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-webview-V5
      this.cordovaWebView!.getWebAttribute()?.height('50%');
      //获取webview的控制变量，用于实现具体的功能，示例代码实现在webviw执行js,具体参考如下连接
      //https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-basic-components-web-V5
      this.cordovaWebView!.getWebviewController().runJavaScript("alert(1);");
      //多次执行js侧回调函数，例如在显示执行进度时，需要多次调用
      let pluginResult:PluginResult = PluginResult.createByString(MessageStatus.OK, "success");
      pluginResult.setKeepCallback(true);
      callbackContext.sendPluginResult(pluginResult);
      let pluginResult2:PluginResult = PluginResult.createByString(MessageStatus.OK, "success2");
      callbackContext.sendPluginResult(pluginResult2);
    }
    return true;
  }

  eayHello(args: ESObject[], callbackContext: CallbackContext):boolean {
    //获取UI上下文，用于原生UI交互
    let uiContext:UIContext = this.cordovaWebView!.getUIContext();
    let promptAction: PromptAction = uiContext?.getPromptAction();
    try {
      //弹出系统原生窗口
      promptAction.showDialog({
        title: 'Title',
        message: 'eay hello',
        buttons: [
          {
            text: '确定',
            color: '#000000'
          }
        ]
      }, (err, data) => {
        if (err) {
          return;
        }
        //执行成功通知js侧回调函数，通知函数有多个具体查看CallbackContext封装函数
        callbackContext.success();
      });
    } catch (error) {
    }
    return true;
  }

  openSystemBrowser(args: ESObject[], callbackContext: CallbackContext):boolean {
    if(args.length > 0) {
      let url:string = args[0];
      //获取UIAbilityContext
      let context = getContext(this) as common.UIAbilityContext
      let wantInfo: Want = {
        action: 'ohos.want.action.viewData',
        entities: ['entity.system.browsable'],
        uri: url
      }
      //跳转一个新的ability
      context.startAbility(wantInfo).then(() => {
        console.log('[跳转至外部浏览器] - success')
      }).catch((err: BusinessError) => {
        console.error('[跳转至外部浏览器] - Failed to startAbility. Code: ' + err.code + 'message:' + err.message);
      })
    }
    return true;
  }
}