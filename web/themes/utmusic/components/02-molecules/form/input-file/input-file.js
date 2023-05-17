(function ($) {
  Drupal.behaviors.fileDropArea = {
    attach: function (context) {
      var $fileInput = $('.file-drop-area input', context);
      var $droparea = $('.file-drop-area', context);
      
      // Highlight drag area.
      $fileInput.once('highlightDragArea').on('dragenter focus click', function() {
        $(this, context).closest('.file-drop-area').addClass('is-active');
      });

      // Back to normal state.
      $fileInput.once('backToNormalState').on('dragleave blur drop', function() {
        $(this, context).closest('.file-drop-area').removeClass('is-active')
      });

      // Change inner text.
      $fileInput.once('changeInnerText').on('change', function() {

        var filesCount = $(this, context)[0].files.length;
        var $textContainer = $(this, context).prev();

        if (filesCount === 1) {
          // If single file is selected, show file name.
          var fileName = $(this, context).val().split('\\').pop();
          $textContainer.text(fileName);
        } else {
          // Otherwise show number of files.
          $textContainer.text(filesCount + ' files selected');
        }
      });
    }
  };
})(jQuery);