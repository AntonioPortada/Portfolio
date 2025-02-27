
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'Portfolio/browser',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: 'e41dcb520364d83109b9ab031edf05dc519c513495d90e4b46e627bda165b6fa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '0b174b00009bd52166f8d7b2f20ff374fd74b3ab97987088571a8d4b88b2764b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20850, hash: '4d8afc5c7bfda6f85ff20f2c377e291868935ada400bb1aa0fe8bd0a7816b83b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
