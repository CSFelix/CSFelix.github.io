const cacheName = "WebChat";

self.addEventListener("install", function(event) {
    event.waitUntill(
        caches.open(cacheName).then(function (cache) {
            cache.addAll([
                "./",
                
                // manifest e service worker index
                "./manifest.webmanifest",
                "./index.js",
                
                // pages
                "./index.html",
                "./404.html",

                // css libraries
                "./assets/css/libraries/ani-collection.css",

                // css styles
                "./assets/css/styles/header.css",
                "./assets/css/styles/sections.css",
                "./assets/css/styles/contact_form.css",
                "./assets/css/styles/skills_cards.css",
                "./assets/css/styles/global.css",
                "./assets/css/styles/404.css",
                "./assets/css/styles/footer.css",
                "./assets/css/styles/modal.css",
                "./assets/css/styles/scrollbar.css",

                // docs
                "./assets/docs/curriulum-vitae-english.pdf",
                "./assets/docs/curriulum-vitae-português.pdf",

                // icons - algorithms
                "./assets/icons/algorithms/clustering.avif",
                "./assets/icons/algorithms/logistic-regression.avif",
                "./assets/icons/algorithms/trees.avif",

                // icons - dashboards
                "./assets/icons/dashboards/investigation.avif",
                "./assets/icons/dashboards/polling.avif",

                // icons - projects
                "./assets/icons/projects/house-for-sale.avif",
                "./assets/icons/projects/spaceship.avif",
                "./assets/icons/projects/store.avif",
                "./assets/icons/projects/trade.avif",

                // icons - projects - cards
                "./assets/icons/projects/cards/growth.avif",
                "./assets/icons/projects/cards/neural.avif",
                "./assets/icons/projects/cards/notebook.avif",

                // icons - skills
                "./assets/icons/skills/analysis.avif",
                "./assets/icons/skills/analytics.avif",
                "./assets/icons/skills/calculating.avif",
                "./assets/icons/skills/computing.avif",
                "./assets/icons/skills/data.avif",

                "./assets/icons/skills/data-science.avif",
                "./assets/icons/skills/json-file.avif",
                "./assets/icons/skills/polling.avif",
                "./assets/icons/skills/programming.avif",
                "./assets/icons/skills/ram.avif",

                "./assets/icons/skills/table.avif",

                // icons
                "./assets/icons/anaconda.svg",
                "./assets/icons/apache-spark.svg",
                "./assets/icons/balance.avif",
                "./assets/icons/dashboard.avif",
                "./assets/icons/data-science.avif",

                "./assets/icons/debian.avif",
                "./assets/icons/dstools.avif",
                "./assets/icons/dstools.svg",
                "./assets/icons/github.svg",
                "./assets/icons/google.svg",

                "./assets/icons/julia.svg",
                "./assets/icons/kaggle.svg",
                "./assets/icons/linkedin.svg",
                "./assets/icons/math.svg",
                "./assets/icons/mongodb.svg",

                "./assets/icons/neo4j.svg",
                "./assets/icons/python.svg",
                "./assets/icons/r.svg",
                "./assets/icons/redis.svg",
                "./assets/icons/sql.svg",

                "./assets/icons/streamlit.svg",
                "./assets/icons/tensorflow.svg",

                // images
                "./assets/images/card.avif",
                "./assets/images/header.avif",
                "./assets/images/header-mobile.avif",
                "./assets/images/logo.avif",
                "./assets/images/profile-pic.avif",

                // js - libraries
                "./assets/js/libraries/easter-eggs.js",
                "./assets/js/libraries/mo.min.js",
                "./assets/js/libraries/scroll-reveal.js",
                "./assets/js/libraries/shuffle-text.js",
                "./assets/js/libraries/vanilla-tilt.min.js",

                // js - scripts
                "./assets/js/scripts/click-burst.js",
                "./assets/js/scripts/link-start.js",
                "./assets/js/scripts/mobile-menu-btn-effect.js",
                "./assets/js/scripts/mobile-menu-toggle-effect.js",
                "./assets/js/scripts/modal-toggle.js",

                "./assets/js/scripts/random-easter-egg.js",
                "./assets/js/scripts/scroll-to-reveal.js",
                "./assets/js/scripts/text-shuffling-effect.js",

                // pwa-logos
                "./assets/pwa-logos/logo180x180.png",
                "./assets/pwa-logos/logo512x512.png",

                // stickers - robot
                "./assets/stickers/robot/404.mp4",
                "./assets/stickers/robot/hi.mp4",
                "./assets/stickers/robot/projects.mp4",
                "./assets/stickers/robot/skills.mp4",

                // videos and audios
                "./assets/videos-audios/link-start.mp3",
                "./assets/videos-audios/link-start.mp4",
            ])
        })
    )
    return self.skipWaiting();
})

self.addEventListener("activate", () => {
    self.client.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      // Cache hit - return response
      if (response) { return response; }
      return fetch(event.request);
    })
  );
}); 

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);

    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName)
    try {
        const refresh = await fetch(req);
        await cache.put(req, refresh.clone());
        return refresh;
    }
    catch(e) {
        const cached = await cache.match(req);
        return cached;
    }
}