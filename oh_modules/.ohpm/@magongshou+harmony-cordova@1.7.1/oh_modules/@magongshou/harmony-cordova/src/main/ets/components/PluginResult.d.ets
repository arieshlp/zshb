export declare enum MessageStatus {
    NO_RESULT = 0,
    OK = 1,
    CLASS_NOT_FOUND_EXCEPTION = 2,
    ILLEGAL_ACCESS_EXCEPTION = 3,
    INSTANTIATION_EXCEPTION = 4,
    MALFORMED_URL_EXCEPTION = 5,
    IO_EXCEPTION = 6,
    INVALID_ACTION = 7,
    JSON_EXCEPTION = 8,
    ERROR = 9
}
export declare enum MessageType {
    /**
     * 字符串
     */
    STRING = 1,
    /**
     * JSON对象，包括JSON对象和JSON数组
     */
    JSON = 2,
    /**
     * 数值类型，包括整形和浮点
     */
    NUMBER = 3,
    /**
     * boolean
     */
    BOOLEAN = 4,
    /**
     * 空值
     */
    NULL = 5,
    /**
     * 字节数组
     */
    ARRAYBUFFER = 6,
    /**
     * 二进制字符串
     */
    BINARYSTRING = 7,
    /**
     * 多媒体类型
     */
    MULTIPART = 8
}
export declare enum MessageStatusDesc {
    NO_RESULT = "No result",
    OK = "OK",
    CLASS_NOT_FOUND_EXCEPTION = "Class not found",
    ILLEGAL_ACCESS_EXCEPTION = "Illegal access",
    INSTANTIATION_EXCEPTION = "Instantiation error",
    MALFORMED_URL_EXCEPTION = "Malformed url",
    IO_EXCEPTION = "IO error",
    INVALID_ACTION = "Invalid action",
    JSON_EXCEPTION = "JSON error",
    ERROR = "Error"
}
/**
 * 将Cordova消息状态枚举值转换为文字描述
 *
 * @param status 状态枚举
 * @returns 状态描述
 */
export declare function convertMessageStatusDesc(status: MessageStatus): string;
export declare class PluginResult {
    private readonly status;
    private readonly messageType;
    private keepCallback;
    private readonly message;
    private readonly multipartMessages;
    constructor(status: MessageStatus, type: MessageType, message: string);
    static create(status: MessageStatus): PluginResult;
    static createByString(status: MessageStatus, message: string): PluginResult;
    static createByJson(status: MessageStatus, message: object): PluginResult;
    static createByJsonString(status: MessageStatus, message: string): PluginResult;
    static createByNumber(status: MessageStatus, message: number): PluginResult;
    static createByBoolean(status: MessageStatus, message: boolean): PluginResult;
    static createByArrayBuffer(status: MessageStatus, message: Uint8Array): PluginResult;
    static createByBinaryString(status: MessageStatus, message: Uint8Array): PluginResult;
    static createByMessageList(status: MessageStatus, message: PluginResult[]): PluginResult;
    getKeepCallback(): boolean;
    setKeepCallback(keepCallback: boolean): void;
    getStatus(): MessageStatus;
    getMessageType(): MessageType;
    getMessage(): string;
    getMultipartMessagesSize(): number;
    getMultipartMessage(index: number): PluginResult;
}
