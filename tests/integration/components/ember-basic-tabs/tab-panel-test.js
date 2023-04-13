import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

module(
  'Integration | Component | ember-basic-tabs/tab-panel',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      let myTabState = new TabState();
      this.set('myTabState', myTabState);

      await render(
        hbs`<EmberBasicTabs::TabPanel @tabState={{this.myTabState}} />`
      );

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <EmberBasicTabs::TabPanel @tabState={{this.myTabState}}>
        template block text
      </EmberBasicTabs::TabPanel>
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
    });

    test('it renders', async function (assert) {
      let myTabState = new TabState();
      this.set('myTabState', myTabState);

      await render(
        hbs`<EmberBasicTabs::TabPanel @tabState={{this.myTabState}} />`
      );

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await render(hbs`
      <EmberBasicTabs::TabPanel @tabState={{this.myTabState}}>
        template block text
      </EmberBasicTabs::TabPanel>
    `);

      assert.equal(this.element.textContent.trim(), 'template block text');
    });

    test('should render correct panel id', async function (assert) {
      let myTabState = new TabState();
      this.set('myTabState', myTabState);

      await render(
        hbs`<EmberBasicTabs::TabPanel @tabState={{this.myTabState}} @index=0 />`
      );

      assert.equal(
        this.element.querySelector('div').getAttribute('id'),
        `${myTabState.name}-0`
      );
    });

    test('should render aria-hidden=false', async function (assert) {
      let myTabState = new TabState();
      this.set('myTabState', myTabState);

      await render(
        hbs`<EmberBasicTabs::TabPanel @tabState={{this.myTabState}} @index=0 />`
      );

      assert.equal(
        this.element.querySelector('div').getAttribute('aria-hidden'),
        'false'
      );
    });
  }
);
