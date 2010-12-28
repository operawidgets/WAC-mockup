/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */

if(typeof window.Widget.Device.DeviceStateInfo == 'undefined'){
    
	/**
	 * DeviceStateInfo provides device state info. In contrast to DeviceInfo, this provides access to information that is dynamic while the phone is operating.
	 * 
	 * @class Widget.Device.DeviceStateInfo
	 */
    window.Widget.Device.DeviceStateInfo = (function(){
        
        
        return {
            
			/**
			 * This is a callback function that is invoked as a response to the requestLocationInfo() method.
			 * 
			 * @method onPositionRetrieved
			 * @param {PositionInfo} locationinfo
			 * @param {String} method
			 */
			onPositionRetrieved: function(locationinfo, method){
				
			},
			
			/**
			 * This issues an asynchronous request for the phone’s location.
             * The widget must register with the ‘onPositionRetrieved’ callback method in order to receive 
             * the position information once it is available.
			 * @method requestPositionInfo
			 * @param {Object} method
			 */
			requestPositionInfo: function(method){
				
		        setTimeout(function(){
					var position = new Widget.Device.PositionInfo();
					
					position.accuracy = Math.random() * 20 + 5,
                    position.altitude = Math.random() * 30 + 160,
                    position.altitudeAccuracy = Math.random() * 5,
                    position.latitude = Math.random()/100000 + 17,
                    position.longitude = Math.random()/100000 + 51,
                    position.timeStamp = new Date()
					
					Widget.Device.DeviceStateInfo.onPositionRetrieved(position, method);
					
				},Math.round(Math.random()*2000));
			}
        }
    })();
}
