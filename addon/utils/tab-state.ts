import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


// Accepts arbitrary object as tab content
type TabInterface = unknown;


export default class TabState {
  @tracked private _tabsContent: Array<TabInterface> = [];
  @tracked private _selectedIndex: number = 0;

  constructor(tabs: Array<TabInterface>, selected: number = 0) {
    this._tabsContent = tabs;
    this._selectedIndex = selected;
  }

  get tabs(): Array<TabInterface> {
    return this._tabsContent;
  }

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  @action
  handleButtonClick(index: number): void {
    this._selectedIndex = index;
  }
}
