const V='colorslides-v1';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// network-first: always the newest version when online, cached copy when offline
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request,{cache:'no-cache'}).then(n=>{const cp=n.clone();caches.open(V).then(c=>c.put(e.request,cp)).catch(()=>{});return n}).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))))});
