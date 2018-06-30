// front end logic
let width = 0;
let height = 0;

// let cellRow = "";
// canvas to update
const canvas = $('#pixelCanvas');
// canvas.height() = 10;
// alert(canvas.height());
$(".btn-primary").on('click', () => {

  height = Number($('#inputHeight').val());
	
	width = Number($('#inputWidth').val());
	/*
	*  Button trigger should do the following
	 - Get the submitted values: height & width
	
	 - Use those values to update the canvas: set Height & set Width
  */
  

	if(height > 0 && width > 0) {
    // update canvas
    canvas.height = height;
    canvas.width = width;
    console.log(canvas);
	} else {
    console.log('Height & width should be greater than zero');
  }
});