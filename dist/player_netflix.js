/*  
// Author Josué Vidal
*/
class VideoPlayer_Netflix{
	
	constructor(array_){
		this.data = array_;
		this.createPlayer();
	}


	createPlayer(){
		$('#'+this.data.div_id).html('<div class="player_netflix_b"></div>');
		$('.player_netflix_b').append('<video id="video_netflix" data-target="playerNetflix" ><source src="https://www.w3schools.com/html/mov_bbb.mp4"  type="video/mp4"></video>');
		this.createControls();
	}
	createControls(){
		$('.player_netflix_b').append('<div class="upperVideo"></div>');
		$('.player_netflix_b').append('<div class="controls_netflix" data-target="netflix_playerControls"></div>');
		$('.player_netflix_b .controls_netflix[data-target="netflix_playerControls"]').append('<div class="bottom_controls-netflix"></div>');
		$('.player_netflix_b .bottom_controls-netflix').append('<div class="controls-netflix_top"></div>');
		$('.player_netflix_b .bottom_controls-netflix').append('<div class="controls-netflix_bottom"></div>');
		$('.player_netflix_b .controls-netflix_bottom').append('<div class="btn-left justify z-4"></div>');
		$('.player_netflix_b .controls-netflix_bottom').append('<div class="text-center justify z-4"></div>');
		$('.player_netflix_b .controls-netflix_bottom').append('<div class="btn-right justify z-4"></div>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="play_pause"><img src="dist/images/play.png"/></button>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="back10"><img src="dist/images/replay.png"/></button>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="forward"><img src="dist/images/forward.png"/></button>');
		$('.player_netflix_b .btn-left').append('<button class="btn-action-left" action="volume"><img src="dist/images/volume.png"/></button>');

	}


}