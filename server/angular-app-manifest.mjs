
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4952, hash: 'cf4c938f0079ec4903a630a7d22cc68c1fb450fce81e1e5a91eb02e9047cab98', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1068, hash: '52bc7bc23ec6e04edacb2e1ce14a20ccd0fd308b4d516322938788761a5ce010', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6163, hash: 'c325346c291bddfd88d8beaad0036b7ff3bc37614d1b75115879e28927ac4da2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
