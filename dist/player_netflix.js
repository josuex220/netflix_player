/*  
// Author Josué Vidal
*/
class VideoPlayer_Netflix{
	
	constructor(array_){
		this.data = array_;
		this.createPlayer();
		this.domPlayer();
	}
	domPlayer(){
		var video = document.getElementById('video_netflix');

			//Actions
			$('.btn-action-left[action="play_pause"]').click(function(){
				var play_p = $(this).attr('play');
				if(play_p == 1){
					$(this).removeAttr('play');
					$(this).html('<img src="dist/images/play.png"/>');
					video.pause();
				}else{
					$(this).attr('play', 1);
					$(this).html('<img src="dist/images/pausa.png"/>');
					video.play();
				}
			});
		function toggleFullScreen() {
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
		}
			$('.btn-action-right[action="fullscreen"]').click(function(){
				toggleFullScreen();
			});
	}
	createPlayer(){
		if(!this.data.div_id){
			$('body').html('Param div_id is required');
		}
		$('#'+this.data.div_id).html('<div class="player_netflix_b"></div>');
		$('.player_netflix_b').append('<video id="video_netflix" style="object-fit: '+ this.data.object_fit +';" data-target="playerNetflix" ><source src="'+ this.data.source[0] +'"  type="'+ this.data.type[0] +'"></video>');
		this.createControls();

		var mouseHover = 0;
		var timeOutSleep;
		var sleep = this.data.time_sleep;
		function d(){
			timeOutSleep = setTimeout(function(){
				if(mouseHover === 0) {
					$('.controls_netflix').fadeOut('slow').hidden;
				}
			}, sleep);
		}
		function detectMove(){
			var addListener, removeListener;
			if (document.addEventListener) {
				addListener = function (el, evt, f) { return el.addEventListener(evt, f, false); };
				removeListener = function (el, evt, f) { return el.removeEventListener(evt, f, false); };

			} else {
				addListener = function (el, evt, f) { return el.attachEvent('on' + evt, f); };
				removeListener = function (el, evt, f) { return el.detachEvent('on' + evt, f); };

			}
			mouseHover = 0;
			d();
			var myListener = function () {
				clearTimeout(timeOutSleep);
				removeListener(document, 'mousemove', myListener);
				$('.controls_netflix').fadeIn('slow').show();
				mouseHover = 1;
			};

			addListener(document, 'mousemove', myListener);
		}

		setInterval(function(){
			detectMove();
		}, 1000);
	}
	createControls(){
		$('.player_netflix_b').append('<div class="upperVideo"></div>');
		$('.player_netflix_b').append('<div class="controls_netflix" data-target="netflix_playerControls"></div>');
		$('.player_netflix_b .controls_netflix[data-target="netflix_playerControls"]').append('<div class="bottom_controls-netflix"></div>');
		$('.player_netflix_b .bottom_controls-netflix').append('<div class="controls-netflix_top"></div>');
		$('.player_netflix_b .bottom_controls-netflix').append('<div class="controls-netflix_bottom"></div>');
		$('.player_netflix_b .controls-netflix_bottom').append('<div class="btn-left left justify z-4"></div>');
		$('.player_netflix_b .controls-netflix_bottom').append('<div class="text-center text-white center justify z-4"></div>');
		$('.player_netflix_b .controls-netflix_bottom').append('<div class="btn-right right justify z-4"></div>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="play_pause"><img src="dist/images/play.png"/></button>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="back10"><img src="dist/images/replay.png"/></button>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="forward"><img src="dist/images/forward.png"/></button>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="volume"><img src="dist/images/volume.png"/></button>');
		if(this.data.title) {
			$('.player_netflix_b .text-center').append('<strong>' + this.data.title + '</strong>');
		}
		if(this.data.subtitle) {
			$('.player_netflix_b .text-center').append('<p class="subtitle_p_nt">'+ this.data.subtitle +'</p>');
		}
		if(this.data.next_ep){
			$('.player_netflix_b .btn-right').append('<button class="btn-action-right" action="next_ep"><img src="dist/images/next.png"/></button>');
		}
		if(this.data.source_description.length > 1) {
			$('.player_netflix_b .btn-right').append('<button class="btn-action-right" action="legenda"><img src="dist/images/legendas.png"/></button>');
		}
		$('.player_netflix_b .btn-right').append('<button class="btn-action-right" action="fullscreen"><img src="dist/images/fullscreen.png"/></button>');

		//Line Top
		$('.player_netflix_b .controls-netflix_top').append('<input type="range" value="0" min="0" max="100" step="any">');
		$('.player_netflix_b .controls-netflix_top').append('<label>12:00</label>');
	}



}