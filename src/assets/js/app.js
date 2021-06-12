if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/ngsw-worker.js')
    .then(function() {
        console.log('Service Worker Registered')
    })
}