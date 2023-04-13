import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import TabState from '@opendatafit/ember-basic-tabs/utils/tab-state';

module('Acceptance | ember-basic-tabs', function (hooks) {
  setupRenderingTest(hooks);

  let template = hbs
      `
        <EmberBasicTabs::TabList @tabState={{this.myTabState}} as |tl|>
          {{#each this.myTabState.tabs as |tab index|}}
            <tl.tab @index={{index}}>
              {{tab.title}}
            </tl.tab>
          {{/each}}
        </EmberBasicTabs::TabList>
        <EmberBasicTabs::TabPanels @tabState={{this.myTabState}} as |tl|>
          {{#each this.myTabState.tabs as |tab index|}}
            <tl.panel @index={{index}}>
              {{tab.title}}
            </tl.panel>
          {{/each}}
        </EmberBasicTabs::TabPanels>
      `;

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

  test('should render 3 tabs and 3 panels', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);
    
    assert.equal(this.element.querySelectorAll('button').length, 3);
    assert.equal(this.element.querySelectorAll('div[role=tabpanel]').length, 3);
  });
  
  test('should render 3 with only 1 aria-selected=true tab and 1 aria-hidden=false', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);
    
    assert.equal(this.element.querySelectorAll('button[aria-selected=true]').length, 1);
    assert.equal(this.element.querySelectorAll('div[role=tabpanel][aria-hidden=false]').length, 1);
  });
  
  test('each panel should reference a tab', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);

    let panelElements = this.element.querySelectorAll('div[role=tabpanel]');
    // paranoia really
    assert.equal(panelElements.length, 3);

    for (let i = 0; i < tabs.length; i++) {
      let panelElement = panelElements[i];
      
      let panelElementLabelledBy = panelElement.getAttribute('aria-labelledby');

      assert.equal(this.element.querySelector(`button#${panelElementLabelledBy}`).tagName, 'BUTTON');
    }
  });

  test('panels and tabs should have the same order', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);
    
    await render(template);
    
    let buttons = this.element.querySelectorAll('button');
    let panels = this.element.querySelectorAll('div[role=tabpanel]');
    
    assert.equal(panels[0].getAttribute('aria-labelledby'), buttons[0].getAttribute('id'));
    assert.equal(panels[1].getAttribute('aria-labelledby'), buttons[1].getAttribute('id'));
    assert.equal(panels[2].getAttribute('aria-labelledby'), buttons[2].getAttribute('id'));
  });
  
  test('visible panel should reference selected tab', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);

    let visiblePanelElement = this.element.querySelector('div[role=tabpanel][aria-hidden=false]');
    let selectedTabElement = this.element.querySelector('button[aria-selected=true]');
    
    assert.equal(visiblePanelElement.getAttribute('aria-labelledby'), selectedTabElement.getAttribute('id'));
  });
  
  test('first panel should be visible by default', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);

    let buttons = this.element.querySelectorAll('button');
    let panels = this.element.querySelectorAll('div[role=tabpanel]');
    
    assert.equal(panels[0].getAttribute('aria-hidden'), 'false');
    assert.equal(buttons[0].getAttribute('aria-selected'), 'true');
  });
  
  test('set initial visible panel to last', async function (assert) {
    let myTabState = new TabState(tabs, 2);
    this.set('myTabState', myTabState);

    await render(template);

    let buttons = this.element.querySelectorAll('button');
    let panels = this.element.querySelectorAll('div[role=tabpanel]');
   
    assert.equal(panels.length, 3);
    assert.equal(buttons.length, 3);

    assert.equal(panels[2].getAttribute('aria-hidden'), 'false');
    assert.equal(buttons[2].getAttribute('aria-selected'), 'true');
  });
  
  test('clicking last tab button should change last panel aria-hidden to false', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);

    let buttons = this.element.querySelectorAll('button');
    let panels = this.element.querySelectorAll('div[role=tabpanel]');

    await click(buttons[2]);

    let visiblePanelElement = this.element.querySelector('div[role=tabpanel][aria-hidden=false]');
    let selectedTabElement = this.element.querySelector('button[aria-selected=true]');
    
    assert.equal(visiblePanelElement.getAttribute('id'), panels[2].getAttribute('id'));
    assert.equal(selectedTabElement.getAttribute('id'), buttons[2].getAttribute('id'));
  });
  
  test('changing visible panel should result in only one visible panel', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);

    let buttons = this.element.querySelectorAll('button');
    let panels = this.element.querySelectorAll('div[role=tabpanel]');

    await click(buttons[1]);

    assert.equal(this.element.querySelectorAll('div[role=tabpanel][aria-hidden=false]').length, 1);
    assert.equal(this.element.querySelectorAll('button[aria-selected=true]').length, 1);
   
    let visiblePanelElement = this.element.querySelector('div[role=tabpanel][aria-hidden=false]');
    let selectedTabElement = this.element.querySelector('button[aria-selected=true]');
    
    assert.equal(visiblePanelElement.getAttribute('id'), panels[1].getAttribute('id'));
    assert.equal(selectedTabElement.getAttribute('id'), buttons[1].getAttribute('id'));
  });
  
  test('clicking multiple times', async function (assert) {
    let myTabState = new TabState(tabs);
    this.set('myTabState', myTabState);

    await render(template);

    let buttons = this.element.querySelectorAll('button');
    let panels = this.element.querySelectorAll('div[role=tabpanel]');

    await click(buttons[2]);
    
    let visiblePanelElement = this.element.querySelector('div[role=tabpanel][aria-hidden=false]');
    let selectedTabElement = this.element.querySelector('button[aria-selected=true]');
    
    assert.equal(visiblePanelElement.getAttribute('id'), panels[2].getAttribute('id'));
    assert.equal(selectedTabElement.getAttribute('id'), buttons[2].getAttribute('id'));
    
    await click(buttons[1]);
    
    visiblePanelElement = this.element.querySelector('div[role=tabpanel][aria-hidden=false]');
    selectedTabElement = this.element.querySelector('button[aria-selected=true]');
    
    assert.equal(visiblePanelElement.getAttribute('id'), panels[1].getAttribute('id'));
    assert.equal(selectedTabElement.getAttribute('id'), buttons[1].getAttribute('id'));
    
    await click(buttons[0]);
    
    visiblePanelElement = this.element.querySelector('div[role=tabpanel][aria-hidden=false]');
    selectedTabElement = this.element.querySelector('button[aria-selected=true]');
    
    assert.equal(visiblePanelElement.getAttribute('id'), panels[0].getAttribute('id'));
    assert.equal(selectedTabElement.getAttribute('id'), buttons[0].getAttribute('id'));
  });
});
