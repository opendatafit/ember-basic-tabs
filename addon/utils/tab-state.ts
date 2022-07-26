import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


type tabsContentType = Array<{
  name: string;
  title: string;
  icon: string;
  content: string;
}>;


export default class TabState {
  @tracked private _tabsContent: tabsContentType = [];
  @tracked private _selectedIndex: number = 0;

  constructor(tabs: tabsContentType, selected: number = 0) {
    this._tabsContent = tabs;
    this._selectedIndex = selected;
  }

  get tabs(): tabsContentType {
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
