
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: 'f6317d0f684d02d5dfdba1f4996f1bb35f93573ec51711785b35b0b67435a1d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '268bb2944b3c872ab1349ec7c5be603ce149b545310673804df1bee90a8b6151', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20852, hash: '88e002b83dc79c003e8df5703f4c1d37415a13a3451b648cca994447b40e8482', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
