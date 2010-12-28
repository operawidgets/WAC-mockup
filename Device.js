/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */

if(typeof window.Widget.Device == 'undefined'){
	
	window.Widget.Device = (function(){
		
		
		return {
			/**
			 * Get the names of applications that can be launched.
			 * @method getAvailableApplications
			 * @return {Array}
			 */
			getAvailableApplications: function(){
				return [];
			},
			
			/**
			 * Launch a specified application or widget with a start parameter.
			 * @method launchApplication
			 * @param {String} application
			 * @param {String} startParameter
			 */
			launchApplication: function(application, startParameter){
		   	
			},
			
			/**
			 * This function is called to vibrate the device for a specific time period, in seconds.
			 * @param {Number} duration
			 */
			vibrate: function(duration){
				alert('wrrrrrrr!\n\nvibrating '+duration+' second(s)');
			}
		}
	})();
}
