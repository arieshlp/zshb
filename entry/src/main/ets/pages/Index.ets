import { MainPage, pageBackPress, pageHideEvent, pageShowEvent , PluginEntry} from '@magongshou/harmony-cordova/Index';
import { webview } from '@kit.ArkWeb';

@Entry
@Component
struct Index {

  cordovaPlugs:Array< PluginEntry> = [];

  controller: webview.WebviewController = new webview.WebviewController();

  aboutToAppear() {
    // 配置Web开启调试模式
    webview.WebviewController.setWebDebuggingAccess(true);
  }

  onPageShow(){
    pageShowEvent(); //页面显示通知cordova
  }
  onBackPress() {
    pageBackPress(); //拦截返回键由cordova处理
    return true;
  }
  onPageHide() {
    pageHideEvent(); //页面隐藏通知cordova
  }
  build() {
    RelativeContainer() {
      MainPage({isWebDebug:true,cordovaPlugs:this.cordovaPlugs}); //isWebDebug:DevTools工具调试开关，启动首页index.html
    }
    .height('100%')
    .width('100%')
  }
}