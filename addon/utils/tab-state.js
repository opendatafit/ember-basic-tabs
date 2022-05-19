import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TabState {
  @tracked _tabsContent = [];
  @tracked _selectedIndex = 0;

  constructor(tabs, selected=0) {
    this._tabsContent = tabs;
    this._selectedIndex = selected;
  }

  get tabs() {
    return this._tabsContent;
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  @action
  handleButtonClick(index) {
    this._selectedIndex = index;
  }
}
