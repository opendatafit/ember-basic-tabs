import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

module('Integration | Component | ember-basic-tabs/tab-panel', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let myTabState = new TabState();
    this.set('myTabState', myTabState);

    await render(hbs`<EmberBasicTabs::TabPanel @tabState={{this.myTabState}} />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <EmberBasicTabs::TabPanel @tabState={{this.myTabState}}>
        template block text
      </EmberBasicTabs::TabPanel>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
