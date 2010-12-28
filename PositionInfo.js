/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */

if(typeof window.Widget.Device.PositionInfo == 'undefined'){
	
	/**
	 * This object provides read-only information about the device’s position information. 
	 * Some or all of the properties may be undefined if the back-end services should be 
	 * unavailable (e.g., due to network unavailability) or if the Widget does not have 
	 * sufficient security permissions to obtain this information.
	 * 
	 * @class Widget.Device.PositionInfo
	 */
	/**
	 * @constructor
	 */
	window.Widget.Device.PositionInfo = function(){
		
	};
	
	/**
	 * The horizontal accuracy of the position in meters, or null if not available.
	 * @property accuracy
	 * @type {Number}
	 */
	window.Widget.Device.PositionInfo.prototype.accuracy = undefined;
	
	/**
	 * Altitude in meters using the World Geodetic System 1984 (WGS84) datum.
	 * @property altitude
	 * @type {Number}
	 */
	window.Widget.Device.PositionInfo.prototype.altitude = undefined;
	
	/**
	 * The vertical accuracy of the position in meters, or null if not available.
	 * @property altitudeAccuracy
	 * @type {Number}
	 */
	window.Widget.Device.PositionInfo.prototype.altitudeAccuracy = undefined;
	
	/**
	 * This is the id of the cell.
	 * @property cellID
	 * @type {Number}
	 */
	window.Widget.Device.PositionInfo.prototype.cellID = undefined;
	
	/**
	 * Latitude in degrees using the World Geodetic System 1984 (WGS84) datum.
	 * @property latitude
	 * @type {Number}
	 */
	window.Widget.Device.PositionInfo.prototype.latitude = undefined;
	
	/**
	 * Longitude in degrees using the World Geodetic System 1984 (WGS84) datum.
	 * @property longitude
	 * @type {Number}
	 */
	window.Widget.Device.PositionInfo.prototype.longitude = undefined;
	
	/**
	 * The time when the location was established.
	 * @property timeStamp
	 * @type {Date}
	 */
	window.Widget.Device.PositionInfo.prototype.timeStamp = undefined;
}
