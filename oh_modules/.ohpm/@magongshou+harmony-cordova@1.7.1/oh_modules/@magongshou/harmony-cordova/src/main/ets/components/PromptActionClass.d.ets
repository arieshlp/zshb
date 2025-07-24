import { ComponentContent as ComponentContent } from "@ohos.arkui.node";
import promptAction from "@ohos.promptAction";
import { UIContext } from '@ohos.arkui.UIContext';
export declare class PromptActionClass {
    static ctx: UIContext;
    static contentNode: ComponentContent<Object>;
    static options: promptAction.BaseDialogOptions;
    static data: Object;
    static setContext(context: UIContext): void;
    static setContentNode(node: ComponentContent<Object>): void;
    static setOptions(options: promptAction.BaseDialogOptions): void;
    static setData(data: Object): void;
    static openDialog(): void;
    static closeDialog(): void;
    static updateDialog(options: Object): void;
}
