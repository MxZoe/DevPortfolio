

$(document).ready(function(){
  $('#aboutNav').click(function(){
    $('#home').fadeOut(200).hide(200);
    $('#about').show();
  })
  $('#projectsNav').click(function(){
    $('#home').fadeOut(200).hide(200);
    $('#projects').show();
  })
  $('#contactNav').click(function(){
    $('#home').fadeOut(200).hide(200);
    $('#contact').show();
  })
  $('#startNav').click(function(){
    $('#home').fadeOut(200).hide(200);
    $('#about').show();
    $('#projects').show();
    $('#contact').show();
  })

});