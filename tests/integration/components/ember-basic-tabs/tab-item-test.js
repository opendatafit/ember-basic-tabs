import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

module('Integration | Component | ember-basic-tabs/tab-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let myTabState = new TabState();
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabItem @tabState={{this.myTabState}} />`
    );

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <EmberBasicTabs::TabItem @tabState={{this.myTabState}}>
        template block text
      </EmberBasicTabs::TabItem>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('should render correct tab id', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let myTabState = new TabState();
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabItem @tabState={{this.myTabState}} @index=0 />`
    );

    assert.equal(
      this.element.querySelector('button').getAttribute('id'),
      `${myTabState.name}-0-tab`
    );
  });

  test('it renders aria-selected', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let myTabState = new TabState();
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabItem @tabState={{this.myTabState}} @index=0 />`
    );

    assert.equal(
      this.element.querySelector('button').getAttribute('aria-selected'),
      'true'
    );
  });

  test('click should not break things', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let myTabState = new TabState();
    this.set('myTabState', myTabState);

    await render(
      hbs`<EmberBasicTabs::TabItem @tabState={{this.myTabState}} @index=0 />`
    );
    await click('button');

    assert.equal(
      this.element.querySelector('button').getAttribute('aria-selected'),
      'true'
    );
  });
});
