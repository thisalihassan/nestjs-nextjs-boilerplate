import { rtk } from '@store/reducers/generated';

const enhancedEmptySplitApi = rtk?.enhanceEndpoints({
  addTagTypes: ['Users'],
  endpoints: {},
});
export * from '@store/reducers/generated';
export { enhancedEmptySplitApi as api };
