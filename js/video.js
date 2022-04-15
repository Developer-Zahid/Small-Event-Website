// Manage page video section
if (jQuery('.pxp-video-section').length > 0) {
    var tv;
    var video;
    var newVideoModal;

    function onYouTubeIframeAPIReady() {
        if (jQuery('.pxp-video-section').length > 0) {
            var videoModal = jQuery('.pxp-video-section-modal');
            newVideoModal = videoModal.clone().appendTo('body');
            videoModal.remove();

            video = new YT.Player('pxp-video-section-modal-container', {
                videoId: jQuery('.pxp-video-section-modal').attr('data-id'),
                playerVars: {
                    autoplay: 0, 
                    modestbranding: 1, 
                    rel: 0, 
                    showinfo: 0, 
                    controls: 1, 
                    disablekb: 1, 
                    enablejsapi: 1, 
                    iv_load_policy: 3
                }
            });

            newVideoModal.on('shown.bs.modal', function (event) {
                var w = jQuery(this).find('.modal-body').width();

                video.setSize(w, w/16*9);
                video.playVideo();
            });
            newVideoModal.on('hidden.bs.modal', function (event) {
                video.stopVideo();
            });
        }
    }

    jQuery(window).on('resize', function() {
        if (newVideoModal.hasClass('show')) {
            var w = newVideoModal.find('.modal-body').width();

            video.setSize(w, w/16*9);
        }
    });
}