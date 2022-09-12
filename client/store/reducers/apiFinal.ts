import { api } from './generated';
const enhancedEmptySplitApi = api?.enhanceEndpoints({
  addTagTypes: ['Users'],
  endpoints: {},
});
export { enhancedEmptySplitApi as apiVfinal };
