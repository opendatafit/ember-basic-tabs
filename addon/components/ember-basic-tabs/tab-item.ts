import Component from '@glimmer/component';

import TabState from '../../utils/tab-state';


interface EmberBasicTabsTabItemComponentArgs {
  Args: {
    Named: {
      tabState: TabState;
      index: number;
    };
    Positional: never;
  };
}


export default class EmberBasicTabsTabItemComponent extends Component<EmberBasicTabsTabItemComponentArgs> {
  get tabID() {
    return this.args.tabState.tabID(this.args.index);
  }
  
  get panelID() {
    return this.args.tabState.panelID(this.args.index);
  }

  get isPanelIDHidden() {
    return this.args.tabState.isPanelIDHidden(this.args.index);
  }
}
