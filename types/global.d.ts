// Types for compiled templates
declare module '@opendatafit/ember-basic-tabs/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
