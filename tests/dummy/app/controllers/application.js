import Controller from '@ember/controller';

import TabContext from 'ember-simple-tabs/utils/tab-context';

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
 
  myTabContext = null;

  constructor() {
    super(...arguments);

    this.myTabContext = new TabContext(this.tabs);
  }
  
}
