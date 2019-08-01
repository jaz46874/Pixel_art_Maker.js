
const canvas = $('#pixelCanvas');

$('#sizePicker').submit( event => {
    event.preventDefault();

    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();
    canvas.html('');

  makeGrid(height, width);
  colorChanger();
});

function makeGrid(height, width) {
  for (var j = 1; j <= height; j++) {
    canvas.append('<tr> </tr>'); }
  for (var i = 1; i <= width; i++) {
      $('tr').append('<td> </td>');
    }}

function colorChanger() {
  $('td').click(function colorChanger() {
      const color = $('#colorPicker').val();
      if ($(event.currentTarget).attr('style')) {
        $(event.currentTarget).removeAttr("style");
      }
      else {
      $(event.currentTarget).css("background-color", color)
    }
});
};
