function takeScreenshot(pictureDataURL) {
    // Decode the dataURL   
    var binary = atob(pictureDataURL.split(',')[1]);
    // Create 8-bit unsigned array
    var array = [];
    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    // Return our Blob object
    var pngImageBlob = new Blob([new Uint8Array(array)], { type: 'image/png' });
	var result = true;
	
	try {
		navigator.clipboard.write( [ new ClipboardItem({ 'image/png': pngImageBlob }) ] ).then( function() { console.log("Finished writing to clipboard."); } );
	}
	catch(e) {
		result = false;
	}
	return result;
}