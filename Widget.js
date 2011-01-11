/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */


if(typeof window.Widget == 'undefined'){
	
	window.Widget = (function(){
		
		var maximized;
		
		/**
		 * naively checks whether window is maximized
		 * @method isMaximized
		 * @private
		 * @return {Boolean}
		 */
		function isMaximized(){
			return window.innerWidth == window.outerWidth &&  window.innerHeight == window.outerHeight;
		}
		
		/**
		 * initializes event listeners
		 * @method init
		 * @private
		 */
		function init(){
			
			maximized = isMaximized();
			
			//focus
			window.addEventListener('focus',function(){
				window.Widget.onFocus();	
			},false);
			
			//maximize / restore
			window.addEventListener('resize',function(){
				if(maximized && !isMaximized()){
					maximized = false;
					window.Widget.onRestore();
				}
				else if(!maximized && isMaximized()){
					maximized = true;
					window.Widget.onMaximize();
				}
			},false);
			
			//wakeup for later
		}
		
		return {
			/**
			 * This is a callback function that is invoked as a response to the Widget taking focus.
			 * @method onFocus
			 */
			onFocus: function(){
				
			},
			
			/**
			 * This is a callback function that is invoked as a response to the Widget being maximised.
			 * @method onMaximize
			 */
			onMaximize: function(){
				
			},
			
			/**
			 * This is a callback function that is invoked as a response to the Widget being restored to the default display mode.
			 * @method onRestore
			 */
			onRestore: function(){
				
			},
			
			/**
			 * This is a callback function that is invoked as a response to the device waking up.
			 * @method onWakeup
			 */
			onWakeup: function(){
				
			},
			
			/**
			 * This method will launch the device browser implementation to the URL specified in the string argument.
			 * @method openURL
			 * @param {String} url
			 */
			openURL: function(url){
				document.location = url;
			},
			
			/**
			 * This method will return a string that has previously been stored with the setPreferenceForKey method, or undefined if the key does not exist.
			 * Widgets do not share keys between each other.
			 * @method preferenceForKey
			 * @param {String} key
			 * @return {String}
			 */
			preferenceForKey: function(key){
				return window.localStorage.getItem(key);
			},
			
			/**
			 * This method will store the string in the preference argument with the key named in the key argument for later retrieval using the preferenceForKey() method.
			 * @method setPreferenceForKey
			 * @param {Object} preference
			 * @param {Object} key
			 */
			setPreferenceForKey: function(preference, key){
				return window.localStorage.setItem(key, preference);
			},
			
			/**
			 * the only value not introduced in spec - to distinguish if we're using mockups or we're on a real device
			 * @property mock
			 * @type {Boolean}
			 */
			mock: true
			
		};
	})();
}
