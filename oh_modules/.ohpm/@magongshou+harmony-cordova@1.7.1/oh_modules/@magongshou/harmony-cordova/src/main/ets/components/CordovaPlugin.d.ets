import { CordovaInterface } from './CordovaInterface';
import { CallbackContext } from './CallbackContext';
import { CordovaWebView } from './CordovaWebView';
import HashMap from "@ohos.util.HashMap";
export { CordovaInterface } from './CordovaInterface';
export { MessageStatus, PluginResult } from './PluginResult';
export { CallbackContext } from './CallbackContext';
export { CordovaWebView } from './CordovaWebView';
export declare class CordovaPlugin {
    protected webId?: string;
    protected cordovaWebView?: CordovaWebView;
    protected cordovaInterface?: CordovaInterface;
    protected serviceName?: string;
    protected mapWebIdToCustomPlugins?: HashMap<string, HashMap<string, CordovaPlugin>>;
    protected mapWebIdToWebView?: HashMap<string, CordovaWebView>;
    protected mapWebIdToInterface?: HashMap<string, CordovaInterface>;
    protected mapWebIdToWebTag?: HashMap<string, string>;
    privateInitialize(webId: string, serviceName: string, cordovaInterface: CordovaInterface, cordovaWebView: CordovaWebView, mapWebIdToCustomPlugins: HashMap<string, HashMap<string, CordovaPlugin>>, mapWebIdToWebView: HashMap<string, CordovaWebView>, mapWebIdToInterface: HashMap<string, CordovaInterface>, mapWebIdToWebTag: HashMap<string, string>): void;
    initialize(cordovaInterface: CordovaInterface, cordovaWebView: CordovaWebView): void;
    execute(action: string, args: ESObject[], callbackContext: CallbackContext): boolean;
}
export interface PluginEntry {
    pluginName: string;
    pluginObject: CordovaPlugin;
}
