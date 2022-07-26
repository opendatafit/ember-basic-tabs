import Component from '@glimmer/component';

import TabState from '../../utils/tab-state';


interface EmberSimpleTabsTabItemComponentArgs {
  Args: {
    Named: {
      tabState: TabState;
    };
    Positional: never;
  };
}


export default class EmberSimpleTabsTabItemComponent extends Component<EmberSimpleTabsTabItemComponentArgs> {
}
