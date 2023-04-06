import Controller from '@ember/controller';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

export default class ApplicationController extends Controller {
  tabs = [
            {
              "name": "model",
              "title": "Model",
              "icon": "",
              "content": "some content 1"
            },
            {
              "name": "params",
              "title": "Params",
              "icon": "",
              "content": "some content 2"
            },
            {
              "name": "graph",
              "title": "Fit graph",
              "icon": "",
              "content": "some content 3"
            },
            {
              "name": "table",
              "title": "Fit table",
              "icon": "",
              "content": "some content 4"
            }
          ];
  
  secondaryTabs = [
            {
              "name": "tab1",
              "title": "Tab 1",
              "icon": "",
              "content": "some further content 1"
            },
            {
              "name": "tab2",
              "title": "Tab 2",
              "icon": "",
              "content": "some further content 2"
            },
            {
              "name": "tab3",
              "title": "Tab 3",
              "icon": "",
              "content": "some further content 3"
            },
            {
              "name": "tab4",
              "title": "Tab 4",
              "icon": "",
              "content": "some further content 4"
            }
          ];
 
  myTabState = null;

  constructor() {
    super(...arguments);

    this.myTabState = new TabState(this.tabs);
    this.secondaryTabState = new TabState(this.secondaryTabs);
  }
  
}
