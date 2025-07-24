import webview from "@ohos.web.webview";
export declare class CordovaWebView {
    private webTag;
    private pageStack;
    private webAttribute;
    private webviewController;
    private uiContext;
    private isShow;
    constructor(webTag: string, webAttribute: WebAttribute | undefined, webviewController: webview.WebviewController, uiContext: UIContext, pageStack?: NavPathStack);
    setWebAttribute(webAttribute: WebAttribute | undefined): void;
    setIsShow(isShow: boolean): void;
    getUIContext(): UIContext;
    getWebviewController(): webview.WebviewController;
    getWebAttribute(): WebAttribute | undefined;
    getPageStack(): NavPathStack | undefined;
    getWebTag(): string | undefined;
    getIsShow(): boolean;
}
