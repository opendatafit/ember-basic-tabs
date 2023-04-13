import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

module(
  'Integration | Component | ember-basic-tabs/tab-panels',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<EmberBasicTabs::TabPanels />`);

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <EmberBasicTabs::TabPanels>
        template block text
      </EmberBasicTabs::TabPanels>
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
    });

    test('should render 3 panels', async function (assert) {
      let myTabState = new TabState([
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
      ]);
      this.set('myTabState', myTabState);

      await render(
        hbs`<EmberBasicTabs::TabPanels @tabState={{this.myTabState}} as |tl|>
            {{#each this.myTabState.tabs as |tab index|}}
              <tl.panel @index={{index}}>
                {{tab.title}}
              </tl.panel>
            {{/each}}
           </EmberBasicTabs::TabPanels>`
      );

      assert.equal(this.element.querySelectorAll('div[role=tabpanel]').length, 3);
    });
  
    test('should render 3 panels with only one aria-hidden=false', async function (assert) {
      let myTabState = new TabState([
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
      ]);
      this.set('myTabState', myTabState);

      await render(
        hbs`<EmberBasicTabs::TabPanels @tabState={{this.myTabState}} as |tl|>
            {{#each this.myTabState.tabs as |tab index|}}
              <tl.panel @index={{index}}>
                {{tab.title}}
              </tl.panel>
            {{/each}}
           </EmberBasicTabs::TabPanels>`
      );

      assert.equal(
        this.element.querySelectorAll('div[role=tabpanel][aria-hidden=false]').length,
        1
      );
    });


    test('should render 3 panels with second tab as aria-hidden=false', async function (assert) {
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
      let myTabState = new TabState(tabs, 1);
      this.set('myTabState', myTabState);

      await render(
        hbs`
          <EmberBasicTabs::TabPanels @tabState={{this.myTabState}} as |tl|>
            {{#each this.myTabState.tabs as |tab index|}}
              <tl.panel @index={{index}}>
                {{tab.title}}
              </tl.panel>
            {{/each}}
          </EmberBasicTabs::TabPanels>
        `
      );

      let secondPanelElement = this.element.querySelectorAll('div[role=tabpanel]')[1];

      assert.equal(secondPanelElement.getAttribute('aria-hidden'), 'false');
    });


  });
