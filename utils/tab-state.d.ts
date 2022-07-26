interface TabInterface {
    [key: string]: unknown;
}
export default class TabState {
    private _tabsContent;
    private _selectedIndex;
    constructor(tabs: Array<TabInterface>, selected?: number);
    get tabs(): Array<TabInterface>;
    get selectedIndex(): number;
    handleButtonClick(index: number): void;
}
export {};
//# sourceMappingURL=tab-state.d.ts.map