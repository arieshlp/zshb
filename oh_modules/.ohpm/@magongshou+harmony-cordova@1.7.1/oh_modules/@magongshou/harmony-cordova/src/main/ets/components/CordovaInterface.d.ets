export declare class CordovaInterface {
    private pageStack?;
    private page?;
    constructor(pageStack?: NavPathStack);
    setPage(page: object): void;
    getPageStack(): NavPathStack;
    getPage(): object;
}
