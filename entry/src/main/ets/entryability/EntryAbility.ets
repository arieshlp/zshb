import { AbilityConstant, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window, promptAction, router} from '@kit.ArkUI';
import { webview } from '@kit.ArkWeb';  //引入webview
import { pagePushNotify, setSchemeHandler } from '@magongshou/harmony-cordova/Index';  //引入cordova sdk

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {
  async onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): Promise<void> {
    webview.WebviewController.initializeWebEngine();//webview引擎初始化
    setSchemeHandler();//设置webview scheme
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onCreate');
    pagePushNotify(want.parameters);//点击通知消息传送数据给cordova，如果app没有鸿蒙推送功能，此行代码可以不加
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

    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
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

}