import { resourceManager } from "@kit.LocalizationKit";

export const RegisterCustomSchemes: (customSchemes:string) => void;
export const setSchemeHandler: (customSchemes:string, schemeHandler:string) => void;
export const InitCordova:(webTag:string, tmpUrl:string, onRouteJump:Function, databaseDir:string,resManager: resourceManager.ResourceManager, customHttpHeaders:string, isAllowCredentials:boolean) => void;
export const GetPluginEntry: () => string;
export const SetPluginEntry:(strPlugin:string) => void;
export const SetResourceReplace:(strWebTag:string, strRes:string, strObj:string) => void;
export const ClearResourceReplace:(strWebTag:string) => void;
export const SetCordovaProtocolUrl:(url:string) => void;
export const onCameraResult:(jsonResult:string, service:string) => void;