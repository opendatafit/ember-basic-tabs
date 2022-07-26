// Types for compiled templates
declare module '@opendatafit/ember-simple-tabs/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
