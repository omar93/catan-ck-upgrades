import adapter from '@sveltejs/adapter-static';
import path from 'path';

export default {
  kit: {
    adapter: adapter({
      pages: path.resolve('../server/public'),
      assets: path.resolve('../server/public'),
      fallback: 'index.html'
    }),
    prerender: {
      entries: []
    }
  }
};
