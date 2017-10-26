$body = $('body');
$winW = $(window).width();
$winH = $(window).height();
$renderer = null;
$bm = $('#bm');
var $animate;
$audio = false;
var $visualizer;
var $showHome;
var $mouseEnd;
var $whiteFill;
var $whiteFillMask;
var $container1;
var $backgroundTimeout;
var $edgeTimeout;
var $texture1;
var $texture2;
var $texture3;
var $texture4;
var $texture5;
var $hideLogo;
var $moveTimeout;
var $contactLoaded;
var $hiddenLogo;

swipeVal = 0;
soundPlaying = false;
$goContact = false;
$goHome = false;
var last_position = {};
$contact = false;
$loaded = false;
$playing = false;
a = document.createElement('audio');
$audio = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
isMobile = false;
is_safari = false;
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	is_safari = true;
}
if (is_safari) {
	res = 1;
} else {
	res = 1;
}
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
$ie = false;
if (isMobile) {
	$audio = false;
}
if (document.documentMode || /Edge/.test(navigator.userAgent)) {
	$ie = true;
}
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

if ('CSS' in window && 'supports' in window.CSS) {
	var support = window.CSS.supports('mix-blend-mode', 'difference');
	support = support ? 'mix-blend-mode' : 'no-mix-blend-mode';
	if (isAndroid) {
		$('html').addClass('no-mix-blend-mode');
	} else {
		$('html').addClass(support);

	}
}

if ($audio) {
	var audioContext = new (window.AudioContext || window.webkitAudioContext)(),
		sampleBuffer,
		sound,
		loop = true;
	var frequencyData;
	var analyser;
	var gainNode;
	if (!$ie) {
		var analyser = audioContext.createAnalyser();
		var gainNode = audioContext.createGain();
		gainNode.gain.value = 1;
		analyser.fftSize = 32;
		var frequencyData = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(frequencyData);
	}
}
$title = 'FiftySeven® — Design Studio.';
History.Adapter.bind(window, 'statechange', function () {
	var State = History.getState();
	$code = State.data.state;
	switch ($code) {
		case 1:
			goHome();
			break;
		case 2:
			goContact();
			break;
	}
});
$x = 0;
$y = 0;
var xDirection = "";
var yDirection = "";
var oldX = 0;
var oldY = 0;
var myX = 0;
var myY = 0;
var el = $(document);

function splitText(s) {
	return s.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
}

$(document).ready(function () {
	var $fsLogo = document.getElementById('fs-logo');
	var els = Array.prototype.slice.call($fsLogo.querySelectorAll('path'));
	var len = els.length;
	var dur = 2000;
	var off = 5;

	var sub = document.querySelector('.sub');
	var split = splitText(sub.innerHTML);
	sub.innerHTML = split;


	anime.timeline({ loop: true })
	.add({
		targets: els.reverse(),
		translateX: [-40,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: dur,
		delay: function(el, i) {
		  	return dur / len / off * i;
		}
	})
	.add({
		targets: sub.childNodes,
		translateX: [-40, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 800,
		offset: 20,
		delay: function (el, i) {
			return 500 + 30 * i;
		}
	});

	// $hiddenLogo = $('#landing hgroup img');

	swipedetect(el, function (swipedir) {
		if (swipedir == 'left' && !$body.hasClass('contact')) {
			History.pushState({ state: 2 }, 'Contact. ' + $title, '/contact');
		} else if (swipedir == 'right' && $body.hasClass('contact')) {
			History.pushState({ state: 1 }, $title, '/');
		}
	})
	
	//$(document).prop('title', 'Loading...');

	$winW = $(window).width();
	$winH = $(window).height();

	$('#sound-btn').click(function () {
		if ($(this).hasClass('muted')) {
			loadSound('assets/audio/loop.mp3');
			$(this).removeClass('muted');
		} else {
			stopSound();
			$(this).addClass('muted');
		}
	});

	$('#contact-btn, #contact-btn *').click(function (e) {
		if ($body.hasClass('contact')) {
			History.pushState({ state: 1 }, $title, '/');
		} else {
			History.pushState({ state: 2 }, 'Contact. ' + $title, '/contact');
		}
	});

	$('#swipe').on('touchend', function () {
		if ($body.hasClass('contact')) {
			History.pushState({ state: 1 }, $title, '/');
		} else {
			History.pushState({ state: 2 }, 'Contact. ' + $title, '/contact');
		}
	});

})
.mousemove(function (e) {
	if (e.pageX < $winW * .2 || e.pageX > $winW * .8 || e.pageY < $winH * .2 || e.pageY > $winH * .8) {
		if ($loaded && !$body.hasClass('contact')) {
			$body.addClass('mouse-edge');
			$edgeTimeout = setTimeout(function () {
				$logoH = $('#landing hgroup img').height();
				// TweenLite.to($whiteFillMask.position, 1, {ease: Power2.easeOut, y: $winH/2 - $logoH});
				// TweenLite.to($whiteFillMask.position, 1, { ease: Power2.easeOut, y: $hiddenLogo.offset().top });
			}, 1100);
		}
	} else {
		clearTimeout($edgeTimeout);
	}
	if ($loaded) {
		$x = e.pageX;
		$y = e.pageY;
		
		$texture5.position.x = $x;
		$texture5.position.y = $y;

	}
	if ($winW < 767) {
		if (typeof (last_position.x) != 'undefined') {
			var deltaX = last_position.x - event.clientX,
				deltaY = last_position.y - event.clientY;

			//check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
			if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0 && !$body.hasClass('contact')) {
				$goContact = true;
				$goHome = false;
			} else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0 && $body.hasClass('contact')) {
				$goContact = false;
				$goHome = true;
			}
		}

		//set the new last position to the current for next time
		last_position = {
			x: event.clientX,
			y: event.clientY
		};

	}
	clearTimeout($mouseEnd);
	myX = e.pageX;
	myY = e.pageY;
	$mouseEnd = setTimeout(function () {
		mouseEnd(myX, myY);
	}, 600);
})
.mouseup(function () {
	if ($winW < 767) {
		if ($goContact) {
			History.pushState({ state: 2 }, 'Contact. ' + $title, '/contact');
		} else if ($goHome) {
			History.pushState({ state: 1 }, $title, '/');
		}
	}
});

function mouseEnd($mX, $mY) {
	if (oldX < $mX) {
		xDirection = "right";
	} else {
		xDirection = "left";
	}
	if (oldY < $mY) {
		yDirection = "down";
	} else {
		yDirection = "up";
	}
	oldX = $mX;
	oldY = $mY;
}

var $resizer;
$(window)
.load(function () {
	$winW = $(window).width();
	$winH = $(window).height();
	$body.addClass('loaded');

	var url = $(location).attr('href').split('/').splice(0, 5).join('/');
	var segments = url.split('/');
	var action = segments[3];
	if (action == 'contact') {
		$contact = true;
		$(document).prop('title', 'Contact. ' + $title);
	} else {
		$(document).prop('title', $title);
	}
	setBackground();

})
.resize(function () {
	$body.addClass('resizing');
	$body.removeClass('texture-loaded');

	$winW = $(window).width();
	$winH = $(window).height();
	if ($renderer) {
		$renderer.destroy();
		$renderer = null;
		$('#texture canvas').remove();
		if (!$('#sound-btn').hasClass('muted') && soundPlaying) {
			stopSound();
		}
	}
	clearInterval($visualizer);
	clearTimeout($resizer);
	$resizer = setTimeout(resizeEnd, 600);
});

function goHome() {
	$body.removeClass('contact-loaded');
	$body.removeClass('contact');
	clearTimeout($showHome);
	clearTimeout($contactLoaded);
	clearTimeout($hideLogo);
	$showHome = setTimeout(function () {
		// TweenLite.to($container1, .5, { ease: Power2.easeOut, alpha: 1 });
		$body.addClass('mouse-edge');
		$logoH = $('#landing hgroup img').height();
		// TweenLite.fromTo($whiteFillMask.position, 1, { ease: Power2.easeOut, y: $winH / 2 + $logoH / 2 + 10 }, { ease: Power2.easeOut, y: $winH / 2 - $logoH });
	}, 1200);
	ga('set', { page: window.location.pathname, title: 'Home' });
	ga('send', 'pageview');
}

function goContact() {
	$body.addClass('mouse-edge');
	// TweenLite.to($whiteFill, 1, { ease: Power2.easeOut, alpha: 0 });
	clearTimeout($hideLogo);
	clearTimeout($contactLoaded);
	clearTimeout($showHome);
	$body.addClass('contact');
	$hideLogo = setTimeout(function () {
		$logoH = $('#landing hgroup img').height();
		// TweenLite.fromTo($whiteFillMask.position, 1, { ease: Power2.easeOut, y: $winH / 2 - $logoH }, { ease: Power2.easeOut, y: $winH / 2 + $logoH / 2 + 10 });
		// TweenLite.to($container1, 3, { ease: Power2.easeOut, alpha: 0 });
		$contactLoaded = setTimeout(function () {
			$body.addClass('contact-loaded');
		}, 1600);
	}, 600);
	ga('set', { page: window.location.pathname, title: 'Contact' });
	ga('send', 'pageview');
}

function resizeEnd() {
	if ($renderer) {
		$displacement1.scale.x = $size;
		$displacement1.scale.y = $size;
		$displacement2.scale.x = $size / 2;
		$displacement2.scale.y = $size / 2;
		$displacement3.scale.x = $size;
		$displacement3.scale.y = $size;
		$displacement4.scale.x = $size / 2;
		$displacement4.scale.y = $size / 2;
		$texture1.position.x = 0;
		$texture1.position.y = 0;
		$texture2.position.x = 0;
		$texture2.position.y = 0;
		$texture3.position.x = 0;
		$texture3.position.y = 0;
		$texture4.position.x = 0;
		$texture4.position.y = 0;
		$renderer = null;
	}
	setBackground();
}

function setBackground() {
	$winW = $(window).width();
	$winH = $(window).height();
	//var res = window.devicePixelRatio;

	$renderer = PIXI.autoDetectRenderer($winW, $winH, {
		'transparent': false,
		//'resolution': res,
		'autoResize': true
	});
	$fill = sxsw.fillscreen($winW * 2, $winH * 2, 1024, 1024);
	$fillW = $fill.width;
	$fillH = $fill.height;
	$fillX = ($winW) * -0.5;
	$fillY = ($fillH - $winH) * -0.5;

	PIXI.RESOLUTION = window.devicePixelRatio;

	$renderer.view.style.position = 'absolute';
	$renderer.view.style.left = '0px';
	$renderer.view.style.top = '0px';
	$renderer.view.style.width = '100%';
	$renderer.view.style.height = '100%';

	$stage = new PIXI.Container();

	$logoW = $('#landing hgroup img').width();
	$logoH = $('#landing hgroup img').height();

	var name = PIXI.Sprite.fromImage('assets/images/type/fifty-seven.svg', undefined, undefined, 2.0);
	name.position.x = $winW / 2;
	//name.position.y = $winH/2;
	// name.position.y = $hiddenLogo.offset().top + $logoH / 2;
	name.scale.x = 1;
	name.scale.y = 1;

	name.width = $logoW;
	name.height = $logoH;
	name.anchor.x = 0.5;
	name.anchor.y = 0.5;

	$colorMatrix = new PIXI.filters.ColorMatrixFilter();
	$colorMatrix.lsd();

	$texture1 = new PIXI.Sprite.fromImage("assets/images/textures/dis1.jpg");
	$texture2 = new PIXI.Sprite.fromImage("assets/images/textures/dis2.jpg");
	$texture3 = new PIXI.Sprite.fromImage("assets/images/textures/dis1.jpg");
	$texture4 = new PIXI.Sprite.fromImage("assets/images/textures/dis2.jpg");
	$texture5 = new PIXI.Sprite.fromImage("assets/images/textures/dis2.jpg");

	$texture1.filters= [$colorMatrix];
	$texture2.filters= [$colorMatrix];
	$texture3.filters= [$colorMatrix];
	$texture4.filters= [$colorMatrix];
	$texture5.filters= [$colorMatrix];

	var bgs = [
		"assets/images/photo/1-dis.jpg"
		// "assets/images/photo/2-dis.jpg",
		// "assets/images/photo/3-dis.jpg",
		// "assets/images/photo/4-dis.jpg",
		// "assets/images/photo/5-dis.jpg",
	];
	var bg = bgs[Math.floor(Math.random() * bgs.length)];

	$image1 = PIXI.Sprite.fromImage(bg);
	$size = 1024;

	$image2 = PIXI.Sprite.fromImage(bg);
	$container2 = new PIXI.Container();

	$displacement3 = new PIXI.filters.DisplacementFilter($texture3);
	$displacement4 = new PIXI.filters.DisplacementFilter($texture4);
	$displacement3.scale.x = $size / 2;
	$displacement3.scale.y = $size / 2;
	$displacement4.scale.x = $size / 4;
	$displacement4.scale.y = $size / 4;

	$image2.filters = [$displacement3, $displacement4];
	$image2.position.x = $fillX;
	$image2.position.y = $fillY;
	$image2.width = $fillW;
	$image2.height = $fillH;
	$image2.alpha = 0.5;

	$container2.addChild($texture3);
	$container2.addChild($texture4);
	$container2.addChild($image2);
	$container2.alpha = 0;

	$stage.addChild($container2);

	$('#texture').append($renderer.view);

	function $animate() {
		var $renderCanvas = requestAnimationFrame($animate);
		if ($winW > 767) {
			$texture1.position.y += 0.25;
			$texture2.position.y += 0.25;
			$texture3.position.y += -0.25;
			$texture4.position.y += -0.25;
		}
		if ($renderer) {
			$renderer.render($stage);
		} else {
			cancelAnimationFrame($renderCanvas);
		}
	}
	$animate();
	$body.removeClass('resizing');

	$loaded = true;
	if ($body.hasClass('contact')) {
		$container1.alpha = 0;
	} else {
		// TweenLite.fromTo($container1, 4, { ease: Power2.easeOut, alpha: 0 }, { ease: Power2.easeOut, alpha: 1 });
	}

	clearTimeout($backgroundTimeout);

	$backgroundTimeout = setTimeout(function () {
		if ($winW > 767) {
			// TweenLite.fromTo($container2, 5, { ease: Power2.easeOut, alpha: 0 }, { ease: Power2.easeOut, alpha: 0.9 });
			anime({
				targets: $container2,
				duration: 5,
				alpha: [0, 0.9],
				easing: [0.17, 0.67, 0.83, 0.67]
			});
		} else {
			// TweenLite.fromTo($container2, 5, { ease: Power2.easeOut, alpha: 0 }, { ease: Power2.easeOut, alpha: 1 });
		}

		if ($audio) {
			if (!$('#sound-btn').hasClass('muted')) {
				loadSound('assets/audio/loop.mp3');
				$body.addClass('audio');
			}
		}
	}, 600);
	if ($body.hasClass('mouse-edge')) {
		// TweenLite.to($whiteFillMask.position, 1, { ease: Power2.easeOut, y: $winH / 2 - $logoH });
	}
	if ($contact && !$body.hasClass('texture-loaded')) {
		setTimeout(function () {
			goContact();
		}, 1000);
	}
	$body.addClass('texture-loaded');

}

if (window.DeviceOrientationEvent && $winW <= 767) {
	window.addEventListener('deviceorientation', function (eventData) {
		var tiltLR = eventData.gamma;
		var tiltFB = eventData.beta;
		var dir = eventData.alpha;
		if ($loaded) {
			deviceOrientationHandler(tiltLR, tiltFB, dir);
		}
	}, false);
}

function deviceOrientationHandler(tiltLR, tiltFB, dir) {
	$texture3.position.y = tiltFB;
	$texture4.position.y = -tiltFB;
}

function loadSound(url) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';
	request.onload = function () {
		soundPlaying = true;
		audioContext.decodeAudioData(request.response, function (buffer) {
			var soundLength = buffer.duration;
			sampleBuffer = buffer;
			playSound(0);

			$visualizer = setInterval(function () {
				if ($audio && $playing && $body.hasClass('texture-loaded')) {
					array = new Uint8Array(analyser.frequencyBinCount);
					analyser.getByteFrequencyData(array);
					// TweenLite.to($displacement3.scale, .15, { ease: Power2.easeOut, x: 2560 * array[4] / 150 });
					// TweenLite.to($displacement3.scale, .15, { ease: Power2.easeOut, xy: 2560 * array[4] / 150 });
				}
			});
		});
	};
	request.send();
}

function setupSound() {
	sound = audioContext.createBufferSource();
	sound.buffer = sampleBuffer;
	sound.loop = loop;
	sound.loopStart = 0;
	sound.loopEnd = sampleBuffer.duration;
	sound.connect(audioContext.destination)
	sound.connect(analyser);
	analyser.connect(audioContext.destination);
	sound.connect(gainNode);
	gainNode.connect(audioContext.destination);
	sound.playbackRate.value = 1;
}

function playSound(time) {
	setupSound();
	sound.start(time);
	$playing = true;
}

function stopSound() {
	$playing = false;
	soundPlaying = false;
	gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2);
	sound.stop(0);
	clearInterval($visualizer);
}

var sxsw = {
	fillscreen: function (boxWidth, boxHeight, imgWidth, imgHeight) {
		var initW = imgWidth;
		var initH = imgHeight;
		var ratio = initH / initW;
		imgWidth = boxWidth;
		imgHeight = boxWidth * ratio;
		if (imgHeight < boxHeight) {
			imgHeight = boxHeight;
			imgWidth = imgHeight / ratio;
		}
		return {
			width: imgWidth,
			height: imgHeight
		};
	}
}

function swipedetect(el, callback) {

	var touchsurface = el[0],
		swipedir,
		startX,
		startY,
		distX,
		distY,
		threshold = 150, //required min distance traveled to be considered swipe
		restraint = 100, // maximum distance allowed at the same time in perpendicular direction
		allowedTime = 2000, // maximum time allowed to travel that distance
		elapsedTime,
		startTime,
		handleswipe = callback || function (swipedir) { }

	touchsurface.addEventListener('touchstart', function (e) {
		var touchobj = e.changedTouches[0]
		swipedir = 'none'
		dist = 0
		swipeVal = 0
		startX = touchobj.pageX
		startY = touchobj.pageY
		startTime = new Date().getTime() // record time when finger first makes contact with surface
		//e.preventDefault()
	}, false)

	touchsurface.addEventListener('touchmove', function (e) {
		var touchobj = e.changedTouches[0]
		swipeVal = touchobj.pageX;
		$body.addClass('swiping');
		if (!$body.hasClass('contact')) {
			$('#white-fill').css('left', Math.max(((startX - swipeVal) / 10), 0) + 'px');
			$('#slider').css('width', 80 - Math.max(((startX - swipeVal) / 75), 0) + 'px');
		} else {
			$('#white-fill').css('left', Math.min(0, ((startX - swipeVal) / 10)) + 'px');
			$('#slider').css('width', 80 - (Math.min(((startX - swipeVal) / 75), 0) * -1) + 'px');
		}
		e.preventDefault() // prevent scrolling when inside DIV
	}, false)

	touchsurface.addEventListener('touchend', function (e) {
		$body.removeClass('swiping');
		clearTimeout($moveTimeout);
		var touchobj = e.changedTouches[0]
		distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
		distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
		elapsedTime = new Date().getTime() - startTime // get time elapsed
		if (elapsedTime <= allowedTime) { // first condition for awipe met
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
				swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe

			}
			else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
				swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
			}
		}
		$moveTimeout = setTimeout(function () {
			$('#white-fill').animate({ 'left': 0 }, 250);
			$('#slider').animate({ 'width': '80px' }, 250);
		}, 1000);
		handleswipe(swipedir)
		//e.preventDefault()
	}, false)
}
