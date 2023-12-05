# @opendatafit/ember-basic-tabs

Unopinionated, no-thrills tabs for Ember.js

## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v14 or above


## Installation

```
ember install @opendatafit/ember-basic-tabs
```


## Usage

```javascript
import TabState from `@opendatafit/ember-basic-tabs/utils/tab-state';

tabs = [
    {
      name: 'model',
      title: 'Model',
      icon: '',
      content: 'some content 1',
    },
    {
      name: 'params',
      title: 'Params',
      icon: '',
      content: 'some content 2',
    },
    {
      name: 'graph',
      title: 'Fit graph',
      icon: '',
      content: 'some content 3',
    },
    {
      name: 'table',
      title: 'Fit table',
      icon: '',
      content: 'some content 4',
    },
  ];

myTabState = null;

constructor() {
  super(...arguments);

  this.myTabState = new TabState(this.tabs, 0, (name = 'test'));
}


```

```
<EmberBasicTabs::TabList 
    @tabState={{this.myTabState}}
    as |tl|>
  {{#each this.myTabState.tabs as |tab index|}}
    <li role="presentation" 
        class={{if (eq this.myTabState.selectedIndex index) "isActive"}}>
      <tl.tab @index={{index}}>
        {{tab.title}}
      </tl.tab>
    </li>
  {{/each}}
</EmberBasicTabs::TabList>
```

```
<EmberBasicTabs::TabPanels 
    @tabState={{this.myTabState}}
    as |tl|>
  {{#each this.myTabState.tabs as |tab index|}}
    <tl.panel @index={{index}} data-index={{index}}>
      {{tab.content}}
    </tl.panel>
  {{/each}}
</EmberBasicTabs::TabPanels>
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
