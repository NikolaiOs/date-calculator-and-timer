function loadScript(src, callback) {
    const el = document.createElement('script');
    el.src = src;
    el.type = 'text/javascript';
    el.onload = callback;

    document.body.appendChild(el);
}


loadScript('src/alarmclock.js', () => {
    console.log('Script loaded')
});