/**
 * WAC mockup used for WAC simulation on desktop computer  
 * @module WAC
 */

if(typeof window.Widget.Multimedia.Camera == 'undefined'){
	
	window.Widget.Multimedia.Camera = (function(){
		
		var previewCanvas = null,
		    lastPosition = [],
			fillStyle = '';
		
		/**
		 * creates a preview canvas based upon a real object
		 * @method createPreviewCanvas
		 * @private
		 * @param {Object} domObj
		 * @return {Object}
		 */
		function createPreviewCanvas(domObj){
			var canvas = document.createElement('canvas');
			
			canvas.width = domObj.width;
			canvas.height = domObj.height;
			
			canvas.className = domObj.className;
			canvas.id = domObj.id;
			
			return canvas;
		}
		
		/**
		 * sets random values for color and position of the box
		 * @method randomize
		 */
		function randomize(){
			    var width = previewCanvas.width,
                height = previewCanvas.height;
			
			//random color
			fillStyle = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
			
			//random position
			lastPosition[0] = Math.random()*width*0.8;
            lastPosition[1] = Math.random()*height*0.8;
		}
		
		/**
		 * redraws preeview canvas i
		 * @method redraw
		 */
		function redraw(){
			var ctx = previewCanvas.getContext('2d'),
			    width = previewCanvas.width,
			    height = previewCanvas.height;
			
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.fillRect(0,0,width,height);
			
			ctx.fillStyle = fillStyle;
			ctx.fillRect (lastPosition[0], lastPosition[1], width*0.2, height*0.2);
			
		}
		
		/**
		 * performs update and reschadules it for next time
		 * @method update
		 * @private
		 */
		function update(){
			randomize();
			
			redraw();
			
			setTimeout(update, 500);
		}
		
		return {
			/**
			 * Capture a still image and save to a file.
			 * @method captureImage
			 * @param {String} fileName
			 * @param {Object} lowRes
			 * @return {String}
			 */
			captureImage: function(fileName, lowRes){
				
				var imageStr = previewCanvas.toDataURL('image/jpeg');
				
				setTimeout(function(){
					Widget.Multimedia.Camera.onCameraCaptured(imageStr);
				},700);
			},
			/**
			 * Callback function when the camera stops capturing images.
			 * @method onCameraCaptured
			 * @param {Object} filename
			 */
			onCameraCaptured: function(filename){
				
			},
			/**
			 * This method attaches the camera to a DOM object which specifies the preview window before taking a picture.
			 * @method setWindow
			 * @param {Object} domObj
			 */
			setWindow: function(domObj){
				var updateNeeded = false;
				
				if (!previewCanvas) {
					previewCanvas = createPreviewCanvas(domObj);
					updateNeeded = true;
				}
				
				domObj.parentNode.insertBefore(previewCanvas,domObj);
				domObj.parentNode.removeChild(domObj);
				
				if (updateNeeded) {
					randomize();
					update();
				}
			}
		}
	})();
}
