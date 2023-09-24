export default {
async fetch(request, env) {
let url = new URL(request.url);
if (url.pathname.startsWith('/')) {
url.hostname = getRandomHostname();
let new_request = new Request(url, request);
return fetch(new_request);
}
// Otherwise, serve the static assets.
return env.ASSETS.fetch(request);
}
};

function getRandomHostname() {
const hostnames = ["104.16.96.8", "172.67.128.75", "104.24.192.3"];
const randomIndex = Math.floor(Math.random() * hostnames.length);
return hostnames[randomIndex];
}
