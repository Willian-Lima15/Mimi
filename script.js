$(document).ready(function() {
    $('#videoModal').on('show.bs.modal', function(event) {
      var button = $(event.relatedTarget);
      var videoId = button.data('video-id');
      var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?rel=0';
      $('#videoPlayer').attr('src', videoUrl);
    });
  
    $('#videoModal').on('hidden.bs.modal', function() {
      $('#videoPlayer').attr('src', '');
    });
  });
  