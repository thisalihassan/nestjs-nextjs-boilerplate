import { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'swagger.json',
  apiFile: '@client/store/reducers/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './store/reducers/generated.ts',
  exportName: 'rtk',
  hooks: true,
};

export default config;
