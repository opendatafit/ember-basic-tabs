import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


import { nanoid } from 'nanoid';

// Accepts arbitrary object as tab content
type TabInterface = unknown;


export default class TabState {
  @tracked private _tabsContent: Array<TabInterface> = [];
  @tracked private _selectedIndex: number = 0;
  @tracked private _name: string = "";

  constructor(tabs: Array<TabInterface>, selected: number = 0, name?: string) {
    this._tabsContent = tabs;
    this._selectedIndex = selected;

    if(name) {
      this._name = name;
    } else {
      this._name = `ts${nanoid(8)}`;
    }
  }

  get tabs(): Array<TabInterface> {
    return this._tabsContent;
  }
  
  get name(): string {
    return this._name;
  }

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  @action
  handleButtonClick(index: number, event: Event): void {
    event.preventDefault();
    this._selectedIndex = index;
  }
  
  tabID(index: number) {
    return `${this.panelID(index)}-tab`;
  }

  panelID(index: number) {
    return `${this.name}-${index}`;
  }

  isPanelIDHidden(index: number) {
    if (this._selectedIndex == index) {
      return false;
    } else {
      return true;
    }
  }
}
