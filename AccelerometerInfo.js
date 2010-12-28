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
