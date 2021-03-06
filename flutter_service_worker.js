'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7d21895536428d2f39e330e5bb2b282f",
".git/config": "97d8655dd8b00f51e81be2b7c2377a2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "be789534b88ad16d23ee37c45f49b83c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2e424edb811846f6bcf35f15e51c94bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "613828f4e4948ba29ac2afec953e01c9",
".git/logs/refs/heads/main": "613828f4e4948ba29ac2afec953e01c9",
".git/logs/refs/remotes/origin/HEAD": "f4c174f001fda447e297a71d3820a2d5",
".git/logs/refs/remotes/origin/main": "15e4662592efc1d0007c4ba7cd011e65",
".git/objects/01/3ab921ae03384ef2eabd4225018f78310612df": "66dd670410273c65045c138d2f32c6a9",
".git/objects/0d/c372f83306db0a969bf14649b1c0557ee031e8": "00d9fb8b8d8e9fe2905ef8dccf447f12",
".git/objects/0e/1e60951e1e960cca0fa8883c4e3267f84367f7": "d7bb4f9e359c3c04344bf2481b07d5d8",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/17/69a629955822d77ce75845a126e17b528edf44": "c19e75f9ef97687854f1a931475bd1f3",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/b08addffcc85ddf661aadbfd9ee541800d15ff": "19eed800bbaf251a55ddfeeb542385fb",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/30/66360009e4f97aef2f4f30a3e51f84eaf7d398": "10a10b949d1dcf6678d10d61305e1775",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/c9d326836068337cb23ec27e8f5ae04ec524e7": "a021712cc451613c227dae5cfa27fe0e",
".git/objects/3a/bd8b73fb819a0196b6f7ed8900b518b903d73b": "5580a487e9138e7af6fe57b1d04efbc5",
".git/objects/43/cdbe5cd76dcd5813013f2c36a886121e60a802": "21c0ae943280349afaca8a4639c33b47",
".git/objects/44/2f0194a236863af2bfc03d8f98d04287e88c16": "35de89ef8e2afa3ca953f77271d7ec76",
".git/objects/48/01adf7a847cd2cc671624b09ba09deadc100ed": "ed80ea20eed661c3ca17913685072005",
".git/objects/4a/206415a29a8db6d43e7b58bfbf90345a11a4d5": "dc7824aa52e090db1e6f7830f45bab99",
".git/objects/4b/59415e5bfb407637984497bc7f355be7ae7432": "1f80cb0c3067ac1d56d8b275d7100e77",
".git/objects/54/449ea306314953094f9a6ad7b70920acac9830": "dda23bc48dc82ab7e59a1d0fef1c22b9",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/60/41a1e9f3791e2d65de9ed0ea90688727d968a1": "0a6aba0cb093b4c02b1842f016ac020d",
".git/objects/60/9764db43b8d3a36f69791f97a60f1f63ecfdb6": "89bc5429b6846c7eb2edac551d262879",
".git/objects/64/640dab242a216a70b87e3ae7c289fcaa10bb51": "34d8566f4fe5af6c2524fdd485c7802e",
".git/objects/64/cf0ac6bc94c2d4839878f48a7a9ea07adf1bfa": "17d4f6fc4f5184b3be4ec4848d614cdf",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/610a6e48f92b07c72a107aac3c7e10314cf805": "6898db5408c206b85b152b81e6e85d04",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/0e7ab9809040297d2374aeef9dca8528bdc52a": "8536b33db3ce7b4d12b533424edd8c62",
".git/objects/6c/23dce4764caaccab2d8c30dbf56bfab4051aaa": "e6f1d12895497e97fbe6a231f75356a0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/6113dbd49c7a06f0cfb14b7de655718ead97c8": "acaaf2694ace972cde76a36738e617a1",
".git/objects/72/9a8e1f65698649bfd87808176715f5823b0e42": "98dd539afd971a4ac4487e2d6bcbf322",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/c42751473a106b80788dd4df22a29c8bc330d6": "254f9b2d535ce647ba980565b2f526e8",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/6d4b9e25e216a63b5d8a98cea4753337b8eb39": "a76f7cc166b54dd5091c3c96f7a7c430",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/11519b6fd91353d404cafc535274a2d65a269d": "4788cb7d5d639149e6407eb7dfd4755b",
".git/objects/91/7cdb4b9274021cf531756199201be3e4c60090": "dc9986642cb9df6a7786f42de81d955a",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/96/115ab3d1c703391e2abb34dc54c3213271791b": "0abf90098bf2f3c9f11ff12539fc1a62",
".git/objects/97/b65f433b9fd8d3ff7ea7fcfa4e3e92b64e1859": "1f61d295fbbe315db1200df368273520",
".git/objects/9a/0c77b7d09e4d93663964150054acb447d51c98": "97683782de3c98a2b3856d4d3ccd5b17",
".git/objects/9e/9e0aee512507fc24bbfe030379582807b46a58": "574eb6bd6ee278104b09760e7f19b8e0",
".git/objects/9f/b1215281b9a242a9d6d46fdaafaca03356f12a": "396df6c4ef2d9af388c8d8f497a0a4e7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a4/7f8916a7b0b19516a3368c6e8d4a3ce1a5cf3e": "39210c3c59a47e81e9976b50b8a40e27",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/b243783b7df3bf6a38e39a73314c7cfa9e7542": "06496df51cdf33b03e0e48dd324ba8ac",
".git/objects/b1/34e11a957f7f02dac813e50519c287cbbc327a": "2b42db93536771fe12dac2e4dea544dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7f2bc25dce9c5d47d0217eb3c669fe5f64e23c": "0f382d335ec468fee8dee5a9de9f5f96",
".git/objects/c1/d10ff43dc83e1b6b409a6763f2f3aca3b27774": "214b5f3d9ecfe99ffa2e4cf5593ff25f",
".git/objects/c4/79fd0c463d2cd57329167081feeb39a8e4fd83": "1ad4f29ac5c16f351a104a20a5e4ebad",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/c9/3e6592d75fa8b5a4ce29f2fc9f6ba80e2ceba1": "d07ecfbaa414496069407c26517592f4",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d3/8f2aa98aa0256437385be6d97bb672e7661775": "0309a8aa8e6af62cb985635de89011a0",
".git/objects/d8/3bbabe03b8ff4affa85e536269cf44ea0ba77d": "0a4c588d0643fcf1be382675e7c68669",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e4/c96ba0f482c58556b6f6c8e7800e836e2b9851": "47ca6a1a999db67602444cb9a8fd0ab6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/ee/9f7870fd3dc40d014bd58f09e30a8504407219": "0ecc5b031e677ef773044058b9b08a4e",
".git/objects/ee/b62935d218c29b66e74f6430c91d1fecda5ce8": "21d661aec4100dfdb0bbbd6c50b7bce5",
".git/objects/ef/43311acc3b2bcbbe0e60fcdc50c097a506e89f": "dbaa59efdef53a458e794d9c10fe9c32",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fa/0ae4d8a82c3ec6ec25e55525d4e7c9b439ce72": "58c91bae75b17a48fbc6e4c0ff106dea",
".git/objects/fb/abf94b96c49ebf4782ed2fcae340a3a9f17ffc": "fae33243a1c6a278532874e332a76147",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/pack/pack-2940094dd35085988f77e25e6e4b0394cef3183b.idx": "2681fcbce82d1f69d065afc11cfa8d7c",
".git/objects/pack/pack-2940094dd35085988f77e25e6e4b0394cef3183b.pack": "8044dcbb67a6465b006ca3bf39626584",
".git/packed-refs": "08b12d987a88b223188de3933f763938",
".git/refs/heads/main": "083fe895e8c6a3f43202c5191dde3d45",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "083fe895e8c6a3f43202c5191dde3d45",
"assets/AssetManifest.json": "482e3a6cf8c798cd462f8bb31f7dfc53",
"assets/assets/pic.png": "ead3873a1e92d5c13d90371ce90de744",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "eb196474f8163acd44cdec56cd997c9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "fdb8cd37a0733d9653eb97866acf0639",
"/": "fdb8cd37a0733d9653eb97866acf0639",
"LICENSE": "77aad657e1d65c322a29183a7a858b20",
"main.dart.js": "ef31978562e51010ebbbcf9d057e626a",
"manifest.json": "75721181c830e84b9d2b33e7c2b97e0a",
"README.md": "337851be96a77bf7f33d8f0e4aff9b06",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
