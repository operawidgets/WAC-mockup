/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */

if(typeof window.Widget.Multimedia == 'undefined'){
	
	window.Widget.Multimedia = (function(){
		
		
		return {
			/**
			 * Indicates if there is any audio playing.
			 * @method isAudioPlaying
			 * @return {Boolean}
			 */
			isAudioPlaying: function(){
				return false;
			},
			
			/**
			 * Static AudioPlayer object associated with Multimedia.
			 * @property AudioPlayer
			 * @type {Object}
			 */
			AudioPlayer: undefined,
			
			/**
			 * Static Camera object associated with Multimedia.
			 * @property Camera
			 * @type {Object}
			 */
			Camera: undefined
		}
	})();
}
