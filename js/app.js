$('document').ready(() => {
  $('#close_intro_modal').click(() => {
    $('#intro_modal').hide();
  })

})
$('#explore').click(() => {
  insertData();
})

function insertData() {
  //Remove Title
  $('#title_div').hide();
  $('#wrapper').hide();
  //Insert kumu
  $('#main_screen').show();
  $('#intro_modal').show();
  if ($('#intro_modal').is(':visible')) {
    $('#kumu').click(() => {
      $('#intro_modal').hide();
    })
  }
  $('#kumu').height('100vh');
  //Load controls
}
