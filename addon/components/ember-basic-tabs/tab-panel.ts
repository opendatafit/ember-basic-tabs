import Component from '@glimmer/component';

import TabState from '../../utils/tab-state';


interface EmberBasicTabsTabPanelComponentArgs {
  Args: {
    Named: {
      tabState: TabState;
      index: number;
    };
    Positional: never;
  };
}


export default class EmberBasicTabsTabPanelComponent extends Component<EmberBasicTabsTabPanelComponentArgs> {
  get panelID() {
    return this.args.tabState.panelID(this.args.index);
  }

  get tabID() {
    return this.args.tabState.tabID(this.args.index);
  }

  get isHidden() {
    return this.args.tabState.isPanelIDHidden(this.args.index);
  }
}
