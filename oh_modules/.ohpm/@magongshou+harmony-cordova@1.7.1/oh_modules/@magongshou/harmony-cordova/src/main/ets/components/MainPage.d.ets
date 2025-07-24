import webview from "@ohos.web.webview";
import { AttributeUpdater as AttributeUpdater } from "@ohos.arkui.modifier";
import HashMap from "@ohos.util.HashMap";
import ble from "@ohos.bluetooth.ble";
import { CordovaWebView } from './CordovaWebView';
import { PluginEntry } from './CordovaPlugin';
interface NativeAttribute {
    pageIndex: string;
    pageValue: number;
    pageArgs: string;
    pageObject: string;
    pageWebTag: string;
}
export interface ArkTsAttribute {
    result: Array<string>;
    content: string;
}
export declare class WebAttributeModifier extends AttributeUpdater<WebAttribute> {
    initializeModifier(instance: WebAttribute): void;
}
export declare class MainPageCycle {
    private aboutToAppear?;
    private onControllerAttached?;
    private onLoadIntercept?;
    private onOverrideUrlLoading?;
    private onInterceptRequest?;
    private onPageBegin?;
    private onProgressChange?;
    private onPageEnd?;
    private onPageVisible?;
    private onRenderExited?;
    private onDisAppear?;
    webviewController?: webview.WebviewController;
    setOnAboutToAppear(aboutToAppear?: (webviewController: webview.WebviewController, parentPage?: object) => void): MainPageCycle;
    setOnControllerAttached(onControllerAttached?: (webviewController: webview.WebviewController, parentPage?: object) => void): MainPageCycle;
    setOnLoadIntercept(onLoadIntercept?: (webResourceRequest: WebResourceRequest, parentPage?: object) => boolean): MainPageCycle;
    setOnOverrideUrlLoading(onOverrideUrlLoading?: (webResourceRequest: WebResourceRequest, parentPage?: object) => boolean): MainPageCycle;
    setOnInterceptRequest(onInterceptRequest?: (request: WebResourceRequest, webTag: string, parentPage?: object) => WebResourceResponse | null): MainPageCycle;
    setOnPageBegin(onPageBegin?: (url: string, parentPage?: object) => void): MainPageCycle;
    setOnProgressChange(onProgressChange?: (newProgress: number, parentPage?: object) => void): MainPageCycle;
    setOnPageEnd(onPageEnd?: (url: string, webviewController: webview.WebviewController, parentPage?: object) => void): MainPageCycle;
    setOnPageVisible(onPageVisible?: (url: string, parentPage?: object) => void): MainPageCycle;
    setOnRenderExited(onRenderExited?: (renderExitReason: RenderExitReason, parentPage?: object) => void): MainPageCycle;
    setOnDisAppear(onDisAppear?: (webviewController: webview.WebviewController, parentPage?: object) => void): MainPageCycle;
    execOnAboutToAppear(webviewController: webview.WebviewController, parentPage?: object): void;
    execOnControllerAttached(webviewController: webview.WebviewController, parentPage?: object): void;
    execOnLoadIntercept(webResourceRequest: WebResourceRequest, parentPage?: object): boolean;
    execOnOverrideUrlLoading(webResourceRequest: WebResourceRequest, parentPage?: object): boolean;
    execOnInterceptRequest(request: WebResourceRequest, webTag: string, parentPage?: object): WebResourceResponse | null;
    execOnPageBegin(url: string, parentPage?: object): void;
    execOnProgressChange(newProgress: number, parentPage?: object): void;
    execOnPageEnd(url: string, webviewController: webview.WebviewController, parentPage?: object): void;
    execOnPageVisible(url: string, parentPage?: object): void;
    execOnRenderExited(renderExitReason: RenderExitReason, parentPage?: object): void;
    execOnDisAppear(webviewController: webview.WebviewController, parentPage?: object): void;
}
export declare class MainPageOnBackPress {
    webviewController?: webview.WebviewController;
    onWebViewBackPress?: (webviewController: webview.WebviewController) => boolean;
    backPress: () => boolean;
}
@Component
export declare struct MainPage {
    private webTag;
    private strTmpUrl;
    private src;
    webId: string;
    isWebDebug: boolean;
    cordovaPlugs: Array<PluginEntry>;
    @Prop
    indexPage: string;
    customSchemes: string;
    private webAttributeModifier;
    pageInfos: NavPathStack;
    isNavPath: boolean;
    parentPage?: object;
    private cordovaInterface;
    private webviewController;
    downDelegate: webview.WebDownloadDelegate;
    private cordovaWebView;
    lifeCycle: MainPageCycle;
    backPress: MainPageOnBackPress;
    clientSocketNumber: number;
    clientAddressId: string;
    device?: ble.GattClientDevice;
    inAppBrowserWebId: string;
    cookies: HashMap<string, Array<string>>;
    alertCustomDialogOption?: NativeAttribute;
    @Prop
    textZoomRatio: number;
    customHttpHeaders: string;
    isAllowCredentials: boolean;
    webKeyboardAvoidMode: WebKeyboardAvoidMode;
    dialogController: CustomDialogController;
    alertCustomDialogController: CustomDialogController;
    private onWatchIndexPageUpdate;
    onSetCordovaWebAttribute: (cordovaWebView: CordovaWebView) => void;
    onInterceptWebRequest: (request: WebResourceRequest, webTag: string) => ESObject;
    private onWebViewBackPress;
    aboutToAppear(): void;
    aboutToDisappear(): void;
    @Builder
    builder(): void;
    build(): void;
    PagesMap(name: string, navPageIntent: Map<string, Object>): void;
}
export {};
