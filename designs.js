const canvas = $('#pixelCanvas');

/*
  * sizePicker gathers int userinput for dimensions of grid
  * preventDefault to stop page from reloading and losing data input when form is submitted
*/

$('#sizePicker').submit( event => {
    event.preventDefault();

//stores int values of user input for grid size
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    canvas.html('');

//calls makeGrid & cellColor functions
  makeGrid(height, width);
  cellColor();
  });

/*
  * makeGrid function creates a grid
  * grid takes user input to specify height and width
  * the "height" parameter represents height of grid by number of cells
  * the "width" parameter represents width of grid by number of cells
*/

function makeGrid(height, width) {
  for (var j = 1; j <= height; j++) {
    canvas.append('<tr> </tr>'); }
  for (var i = 1; i <= width; i++) {
      $('tr').append('<td> </td>');
    }}

/*
* function cellColor allows the user to change color of cell with a mouse click
* const 'color' refers to the colorPicker tool in the HTML element
* function removes old color attribute and passes the new one based on user selection
*/

function cellColor() {
      $('td').click(function() {
      const color = $("#colorPicker").val();
      $(this).removeAttr("background-color");
      $(this).css("background-color", color);

      })};

