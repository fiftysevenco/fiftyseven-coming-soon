var delayMillis = 0;

setTimeout(function(){
var animData = {
       container: document.getElementById('bm'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'data.json'
    };
    var anim = bodymovin.loadAnimation(animData);

    anim.play();
    anim.setSpeed(.6);
}, delayMillis);