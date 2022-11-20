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
 
  myTabState = null;

  constructor() {
    super(...arguments);

    this.myTabState = new TabState(this.tabs);
  }
  
}
