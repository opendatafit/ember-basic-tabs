declare type tabsContentType = Array<{
    name: string;
    title: string;
    icon: string;
    content: string;
}>;
export default class TabState {
    private _tabsContent;
    private _selectedIndex;
    constructor(tabs: tabsContentType, selected?: number);
    get tabs(): tabsContentType;
    get selectedIndex(): number;
    handleButtonClick(index: number): void;
}
export {};
//# sourceMappingURL=tab-state.d.ts.map