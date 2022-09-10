import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'practice-blog',
  apiKey: process.env.API_KEY,
});
