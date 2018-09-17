/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.4.1"});

importScripts(
  "push.worker.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0.f630865f4fcad5875526.js",
    "revision": "79ccfc8a4bb34ac49f1c1db6f3dd028f"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "b69779ef8f3f925e2720819035946f62"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/icon-1024x1024.png",
    "revision": "910e168ad309dc2e266167e47a64c367"
  },
  {
    "url": "assets/icon-144x144.png",
    "revision": "40a5490a44a4082939cd6d5c16652f32"
  },
  {
    "url": "assets/icon-512x512.png",
    "revision": "5d4bb490d9d701993bcee008f2dee611"
  },
  {
    "url": "assets/logo.svg",
    "revision": "476f89a2b8b833330b01ae670e7d707d"
  },
  {
    "url": "assets/mstile-150x150.png",
    "revision": "51303bdbfb1d31e9ed38b48c20a31a7f"
  },
  {
    "url": "assets/safari-pinned-tab.svg",
    "revision": "5fa66303b548e67d81e9da4e98fb7a2a"
  },
  {
    "url": "index.html",
    "revision": "6c3d187d7f25d8d723e0c4c3aea8343f"
  },
  {
    "url": "main.59d1b7c27c8188b8c396.js",
    "revision": "6f0c50fcad4f04ea0c86e9d0f1db5484"
  },
  {
    "url": "manifest.json",
    "revision": "1ede0946ca1796b4db2e1694bbf7cb2b"
  },
  {
    "url": "polyfills.1b2d9d0b0780451c495d.js",
    "revision": "c7c516ce6d0e61f919f4ed2125bb8c90"
  },
  {
    "url": "push.worker.js",
    "revision": "a7f3a6757b874db58bc50c5865a2d9e7"
  },
  {
    "url": "runtime.b34492d5e1efa7b7745c.js",
    "revision": "48d7893049fc56f726eaa7f636d7ed41"
  },
  {
    "url": "styles.ae41f4cca5021b1d5fb0.css",
    "revision": "f94c93c433d6f487ced38333388f8dd3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
