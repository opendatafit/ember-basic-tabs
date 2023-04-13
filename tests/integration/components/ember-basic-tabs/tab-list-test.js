import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

module('Integration | Component | ember-basic-tabs/tab-list', function (hooks) {
  setupRenderingTest(hooks);
    
  let tabs = [
    {
      name: 'test1',
      title: 'Test 1',
    },
    {
      name: 'test2',
      title: 'Test 2',
    },
    {
      name: 'test3',
      title: 'Test 3',
    },
  ];

  test('it renders', async function (assert) {
    await render(hbs`<EmberBasicTabs::TabList />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <EmberBasicTabs::TabList>
        template block text
      </EmberBasicTabs::TabList>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('should render 3 tabs', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(
      hbs`
        <EmberBasicTabs::TabList @tabState={{this.myTabState}} as |tl|>
          {{#each this.myTabState.tabs as |tab index|}}
            <tl.tab @index={{index}}>
              {{tab.title}}
            </tl.tab>
          {{/each}}
         </EmberBasicTabs::TabList>
      `
    );

    assert.equal(this.element.querySelectorAll('button').length, 3);
  });

  test('should render 3 tabs with only one aria-selected=true', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabList @tabState={{this.myTabState}} as |tl|>
          {{#each this.myTabState.tabs as |tab index|}}
            <tl.tab @index={{index}}>
              {{tab.title}}
            </tl.tab>
          {{/each}}
         </EmberBasicTabs::TabList>`
    );

    assert.equal(
      this.element.querySelectorAll('button[aria-selected=true]').length,
      1
    );
  });

  test('should render 3 tabs with second tab as aria-selected=true', async function (assert) {
    let myTabState = new TabState(tabs, 1);
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabList @tabState={{this.myTabState}} as |tl|>
          {{#each this.myTabState.tabs as |tab index|}}
            <tl.tab @index={{index}}>
              {{tab.title}}
            </tl.tab>
          {{/each}}
         </EmberBasicTabs::TabList>`
    );

    let secondBtnElement = this.element.querySelectorAll('button')[1];

    assert.equal(secondBtnElement.getAttribute('aria-selected'), 'true');
  });

  test('should render 3 tabs and on click change to aria-selected to second tab', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabList @tabState={{this.myTabState}} as |tl|>
          {{#each this.myTabState.tabs as |tab index|}}
            <tl.tab @index={{index}}>
              {{tab.title}}
            </tl.tab>
          {{/each}}
         </EmberBasicTabs::TabList>`
    );

    let btnElement = this.element.querySelectorAll('button')[0];
    assert.equal(btnElement.getAttribute('aria-selected'), 'true');

    await click(this.element.querySelectorAll('button')[1]);

    btnElement = this.element.querySelectorAll('button')[1];
    assert.equal(btnElement.getAttribute('aria-selected'), 'true');
  });
});
