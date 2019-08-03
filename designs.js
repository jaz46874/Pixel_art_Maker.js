const canvas = $('#pixelCanvas');

$('#sizePicker').submit( event => {
    event.preventDefault();

    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    canvas.html('');

  makeGrid(height, width);
  cellColor();
});

function makeGrid(height, width) {
  for (var j = 1; j <= height; j++) {
    canvas.append('<tr> </tr>'); }
  for (var i = 1; i <= width; i++) {
      $('tr').append('<td> </td>');
}};


function cellColor() {
      $('td').click(function() {
      const color = $("#colorPicker").val();
      $(this).removeAttr("background-color");
      $(this).css("background-color", color);

})};
