/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */

if(typeof window.Widget.Device.AccelerometerInfo == 'undefined'){
	
	/**
	 * Accelerometer information is retrieved directly as a property of the DeviceStateInfo object.  
     * Due to potential timing delays in accessing the accelerometer values from the static Accelerometer 
     * object, the widget runtime will assign all values of xAxis, yAxis and zAxis when the xAxis property 
     * is accessed.
     *
     * The widget runtime will assign a new set of triple values everytime the xAxis property is accessed. 
     * It is recommended that widget developers always perform their initial query against the xAxis value.
     *
     * The widget runtime may also decide, at its own discretion, not to poll Accelerometer data until an 
     * initial query is made by a widget.
     *
     * If a device only has a two-dimensional accelerometer, the value of the unsupported axis will
     * be undefined. 
     * 
	 * @class Widget.Device.AccelerometerInfo
	 */
	window.Widget.Device.AccelerometerInfo = (function(){
		
		var mouseArea,
		    G = 9.82;
		
		/**
		 * returns HTML object which will be an area for moving mouse pointer
		 * moving around it will change accelerometer readings
		 * 
		 *  - it will first check for WAC_MOCK_ACCELERATION_AREA variable, if it's 
		 * defined it will be returned
		 * - than it will try to find object with id = wacMockAccelerationArea
		 * - falling back it will return reference to <body>
		 * 
		 * @method getMouseMoveArea
		 * @private
		 * @return {Object}
		 */
		function getMouseMoveArea(){
			
			if(typeof WAC_MOCK_ACCELERATION_AREA == 'object'){
				return WAC_MOCK_ACCELERATION_AREA;
			}
			
			if(document.getElementById('wacMockAccelerationArea') != null){
				return document.getElementById('wacMockAccelerationArea');
			}
			
			return document.body;
		}
		
		/**
		 * event handler for moving mouse around selected area
		 * it will change readings of two axes: X and Y 
		 * @method onMouseMove
		 * @param {MouseEvent} e
		 * @private
		 */
		function onMouseMove(e){
			var maxX = mouseArea.clientWidth,
                maxY = mouseArea.clientHeight;
            
            Widget.Device.AccelerometerInfo.xAxis = -(((e.clientX * 2*G) / maxX)-G);
            Widget.Device.AccelerometerInfo.yAxis = ((e.clientY * 2*G) / maxY)-G;
			Widget.Device.AccelerometerInfo.zAxis = 0;
		}
		
		/**
		 * initiates event listeners
		 * @method init
		 * @private
		 */
		function init(){
			mouseArea = getMouseMoveArea();
			mouseArea.addEventListener('mousemove',onMouseMove,false);
		}
		
		window.addEventListener('load',init,false);

		return {
			/**
		     * The value of the x-axis, which is positive to the right of the device and negative to the left.
		     * @property xAxis
		     * @type {Number}
		     */
		    xAxis: undefined,
		    
		    /**
		     * The value of the y-axis, which is positive above the device and negative below the device.
		     * @property yAxis
		     * @type {Number}
		     */
		    yAxis: undefined,
		    
		    /**
		     * The value of the z-axis, which is positive from the screen of the device toward the user and negative behind the device.
		     * @property zAxis
		     * @type {Number}
		     */
		    zAxis: undefined
		}
		
	})();
}
