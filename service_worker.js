//キャッシュファイル指定
var CASH_NAME = 'pwa-sample-caches';
var urlToCache= [
  '/DetectiveTakami.github.io/',
];

//インストール処理
self.addEventListener('install', function(event) {
  event.witUntil(
    caches
      .open(CASH_NAME)
      .then(function(cache) {
        return cache.addALL(urlsToCache);
      })
  );
});

//リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
  event.respondWidth(
    caches
    .match(event.request)
    .then(function(response) {
      return response ? response : fetch(event.request);
    })
  );
});
