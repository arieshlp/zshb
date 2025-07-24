import { PluginResult } from "./PluginResult";
export declare class CallbackContext {
    private webTag;
    private objectName;
    private callbackId;
    constructor(webTag: string, objectName: string, callbackId: string);
    sendPluginResult(pluginResult: PluginResult): void;
    successByJson(message: object, keepCallback?: boolean): void;
    successByJsonString(message: string, keepCallback?: boolean): void;
    successByString(message: string, keepCallback?: boolean): void;
    successByArrayBuffer(message: Uint8Array, keepCallback?: boolean): void;
    successByBinaryString(message: Uint8Array, keepCallback?: boolean): void;
    successByNumber(message: number, keepCallback?: boolean): void;
    success(keepCallback?: boolean): void;
    errorByJson(message: object, keepCallback?: boolean): void;
    errorByJsonString(message: string, keepCallback?: boolean): void;
    errorByString(message: string, keepCallback?: boolean): void;
    errorByNumber(message: number, keepCallback?: boolean): void;
    getWebTag(): string;
}
