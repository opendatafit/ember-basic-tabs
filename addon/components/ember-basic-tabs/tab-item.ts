import Component from '@glimmer/component';

import TabState from '../../utils/tab-state';


interface EmberBasicTabsTabItemComponentArgs {
  Args: {
    Named: {
      tabState: TabState;
    };
    Positional: never;
  };
}


export default class EmberBasicTabsTabItemComponent extends Component<EmberBasicTabsTabItemComponentArgs> {
}
