
// / front end logic
let width = 0;
let height = 0;

// let cellRow = "";
// canvas to update
const canvas = $('#pixelCanvas');

//this will store the color that is currently on the ColorPicker
let color = "#000000";


$("#updateCanvas").on('click', function () {

  //first clear the canvas if it is not empty
  canvas.empty();

  //get height and convert it to an integer
  preventDefault();
  height = parseInt($('#inputHeight').val());

  //get width and convert it to an integer
  width = parseInt($('#inputWidth').val());

  console.log("Width = " + width + " , height = " + height);

  //start creating the canvas
  for (var i = 0; i < height; i++) {

    for (var j = 0; j < width; j++) {

      //create CSS attributes that will be appended to a cell on the canvas
      var cssObj = {
        'background-color': color,
        'width': "25px",
        'height': '25px',
        'float': 'left',
        'border': "2px solid #c0c0c0"
      };

      canvas.append(
        //attach ID to the cell
        $("<div></div>", { id: 'id' + i + '_' + j })

          //attach CSS attributes to the cell
          .css(cssObj)

          // We want if you click on a cell, it updates the color to the one that is on the color picker.		
          .on('click', function () {
            console.log("changing to " + color);
            this.style.backgroundColor = color;
          }));
    }
    canvas.append($("<br/><br/>"));

  }

});


//set onClick listener to the color picker
//if you select a new color, it saves the new color automatically.
$('#colorPicker').on('change', function () {
  console.log($('#colorPicker').val());
  color = $('#colorPicker').val();
});