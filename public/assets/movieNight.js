$(document).ready(function() {

  $('#movie-submit').on('click', function() {
    var title = $('#movie-title-input').val();
    var movie = {title};

    $.ajax({
      type: 'POST',
      url: '/movies',
      data: movie,
      success: function(data) {
        location.reload();
      }
    });
  });

  $('li button').on('click', function() {
    const id = this.id;

    $.ajax({
      type: 'DELETE',
      url: `/movies/${id}`, //adding id directly into url so that parsing is easier on the server end (i.e. no body-parser use) 
      data: id,
      success: function(data) {
        //do something
      }
    });
  });

})