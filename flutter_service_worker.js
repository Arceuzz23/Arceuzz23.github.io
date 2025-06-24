'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c635c5426529d23a9a67b9706bcdede1",
".git/config": "5bd2b624baeac7143f781fefffa9adc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e80a557aad0215e728e67117a09442d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80a263e7acfaafd01fb8cb0ffdef7d1b",
".git/logs/refs/heads/main": "dc5c0160535ba72ab3d3ee2d169ec9f0",
".git/logs/refs/remotes/origin/main": "2402c945b3c763fdc241374164501c69",
".git/objects/07/0d7002aa427a8af78269534a11944d480c0ad9": "f9325b3bfffea02daedf3d518067736b",
".git/objects/07/cf1f465164a6e870073d662dcc31e762a2d4a4": "bea2ef1c495143c9029098679f9cd89a",
".git/objects/08/1b28d3cbc739f3847fee3bb95fd84d36814921": "0511b6bbe9a3cf9f53d21f1a47018116",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0d/148fe90dca70850c0fb17626996362580aaee4": "393caf78806f28549add718cbb21195c",
".git/objects/15/e46b5fc10e5f386ce4d8065a4ada9056d058ba": "e7be7b6da2bb3776f646e951f93bd968",
".git/objects/1c/f1f73e4a85999a5b2a330fd8d64bda19289cf8": "69496da2ab3f770272502fa960bbd404",
".git/objects/20/2e100f637827dc6198122c0e04c50e7657f75e": "3a738e8252d1cfab339ce73973b8f968",
".git/objects/25/865d2da750117d27adcfaeef41fed33d40f5d5": "3b86ea642e3282c8847c5b4061caac0d",
".git/objects/25/f2a2ade82571d5eb2b7d4a19cec45c11cc1fa2": "c7c9d25ff47d0aead870610a63f0ac4b",
".git/objects/27/45b5655b4e1f04ac974e39d432d7b558053371": "1aeb35c9ff6ced67bea6f1e79c68e401",
".git/objects/27/6c249139eef603c7850eb3028fd616d91c6567": "d09595da5e9aedae5fdb52470fcefab8",
".git/objects/2b/4b3625514ad15646fe845c83e43338263ecfe6": "5c82c202fa6a77da61f8402f8df72cc7",
".git/objects/2b/a73337229e5bd1d8db05f1fd9e3bc53b7a4d6a": "f7658429b2686ebc0bfba275e4beda0b",
".git/objects/31/723e79262817f77dc0f24c14f00e4be4339d9b": "8758d529ebed8419241c6d5f4c0369b6",
".git/objects/3b/74e89904b5523b9dcf6eab54fd42ca468445aa": "912a70d36cdc2c1aa2880ecc7e65d683",
".git/objects/4a/f1ff54c5e2f54238a0e2013cb9a37e3130e4ca": "6fd4c8c141185bfa714642c0e64ead8d",
".git/objects/57/a271f99c917b894d4103c0524d862189d3d59d": "b3e6844cfff94eb655a418a82b4a53c5",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/80b93772ed6d7a42ed592089c8bc5b21539565": "a2833d63aa7e0b1fbdafb31f6cd4fd74",
".git/objects/64/a039da05cedcdcbce2f730361de1af2edbafd0": "729e3538cff07cb10ab1272e85b6e4fc",
".git/objects/6b/27a50db78b6513cebaba08c712be3a8026390f": "967e4fe5b70234bb3cea3e00c059d558",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/a539b7bf026609283672ee5eed3ffe3fd55e28": "8ac64310beb534566ac2422e1416a088",
".git/objects/6f/97b74d91de262518e51307908855f69d26eef8": "7e59a42e4dcfd133404ae76d23b6f183",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/85/48c8fea8de52a2d80236db48e5b4d671b00461": "aa3481e22a4d4f016a110488279bf82e",
".git/objects/85/97d61dfed1de33e0a51d9456b96efeef48b005": "485ed440e5d9b13f609aa6a976b9f91e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/b6b473921fe3ad4ada2a7d81d9aac31a3b0342": "03e46c7ed01d2d787d8507f291f0dc0a",
".git/objects/9e/b868878fb5e59460bcf983bbe0ac2ccddaf2d6": "ae987256772d4edea5c48eee6b61b955",
".git/objects/a0/b72b49b843b6787f531307818ffeec0adb32cf": "7cd406f2348d161a3146331bddc3b57c",
".git/objects/ac/72bc729b85c91fe04fa152c71fd075872e2bf1": "2ae63e9f0f104bf23aa563319e14ca51",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0681c35f87a111d1162b562a5b0d22f2f1bd93": "a2c760a45cd2e8d9a5e460261484bf11",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cce1beddce12ace79d7dbea96cadf02d71ebfa": "4a298ecf5156173d99cde2e9170b25b5",
".git/objects/bb/60dff0f313e716afa18e3bb7c0983ef441c52f": "66adc5b07c3808c942dd9f7fe8e26604",
".git/objects/bd/2ec3fef10329b172f2377c73055d02c872c1c7": "94bc3a0ed388da1744852431fd6042d6",
".git/objects/c6/65e0493c9d57a188b892efca171b050f8e177d": "c7a1cead4887ac021b2e6c042f2d5479",
".git/objects/cb/265f0e6f12290e4e350b829dd4a4b72d4cb1b2": "4ca0ca28c28f028da482fa7505b00e65",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e0/fafdcefe8144c9a183b9289af5ef958ece492b": "c7f69f24ef473aefdd80b1b608f03485",
".git/objects/e5/e67e29fbf5e38e2fae5e2faa5a4d07c01c865f": "aea82182db37684169e8b01ccb84b1c8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/b47fbcf1d7dd86774e26780726cdf31066b95d": "28215a36049e96591cca2443fc617a45",
".git/objects/ea/c22cb2d0dbcf3ab6b742fdcc1b34e94456dcad": "78ea0f823d00c40f0e90db6bfd7ececa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/9266f9093387fd5011d17a3af9bd3d76e32122": "ecfd731783b117fc6d4439f433f1bfbc",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fb/6eee3248199657938e655cb80acb4dde31eded": "e97dac34d3bc03aa65459a26862b2c60",
".git/objects/fc/e5476cde298fd97287331cea619722d05e6c6c": "b99df495f2169e6e3ebf94c09fa6c20d",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "c7ad3b9bc7809f3129349955cd8159dd",
".git/refs/remotes/origin/main": "c7ad3b9bc7809f3129349955cd8159dd",
"assets/AssetManifest.bin": "595677ba044dfce031e720a007a52af7",
"assets/AssetManifest.bin.json": "ba68c491d9ae319523a301531f908aee",
"assets/AssetManifest.json": "91c823a06d5229967f12c79d9683d5b0",
"assets/assets/fonts/Anton-Regular.ttf": "4cab96279ec05c67f65c13f193650412",
"assets/assets/fonts/CourierPrime-Regular.ttf": "fba4686ed1d1b4ef05ab14db78805dbe",
"assets/assets/fonts/Devant-Medium.ttf": "1ad45a6df947c3f8888e6d3947b9f5c4",
"assets/assets/fonts/OoohBaby-Regular.ttf": "a9eb0fb808f8499b633f08f8255f2e60",
"assets/assets/images/profile_image.png": "d57d623a8919019e3470d873aa6e9781",
"assets/assets/images/random1.png": "45f2ce801a1b6200a197ccc94a656312",
"assets/assets/images/random2.png": "c43fcd8d4ecdeff22dbc1fcf6600cc3a",
"assets/assets/images/random3.png": "ffeb27db4951d95f20ce1d88a92a0ba9",
"assets/FontManifest.json": "6fcce6cd11d0d87fd46050f6c65208a4",
"assets/fonts/MaterialIcons-Regular.otf": "1cf51768f3b7c4173f9a3c991afa7509",
"assets/NOTICES": "8543fb6b4d022e1246778a6e35124a4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "cf652bfcb769d3a1475ef2e681cb296d",
"canvaskit/canvaskit.wasm": "2f053397f614d475e570d44f80653160",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "dd0639cede41313568f23adab0d59d69",
"canvaskit/chromium/canvaskit.wasm": "6283f2e30f9fbfea919aea255d69c768",
"canvaskit/skwasm.js": "bb7f9a4f8e1315e306e274ee39c92280",
"canvaskit/skwasm.js.symbols": "e00ad292d7142f4e5ed8832aac7a8cdc",
"canvaskit/skwasm.wasm": "7859bbbb10484220145487e228e46926",
"canvaskit/skwasm_heavy.js": "ff62b0ccde0d87bb610723a5276bfcfc",
"canvaskit/skwasm_heavy.js.symbols": "ffae643d20705177ab25d85913fe7d3b",
"canvaskit/skwasm_heavy.wasm": "5d7d4249bb9165bd1fcfe02d801f0e5c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "49b9eaa0d1764f47aa1518514fb766f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "60eaddabd19418e3d1059ba1cbfa8723",
"/": "60eaddabd19418e3d1059ba1cbfa8723",
"main.dart.js": "fb62ca62ae15ae1f2e0f439fc3a620e4",
"manifest.json": "ae2174422baee936a8173de47cacd0f3",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
