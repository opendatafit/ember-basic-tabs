import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ember-simple-tabs/tab-panels', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmberSimpleTabs::TabPanels />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <EmberSimpleTabs::TabPanels>
        template block text
      </EmberSimpleTabs::TabPanels>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
