Drupal.behaviors.readmore = {
  attach(context) {
    const ReadSmore = require('read-smore');
    const readMores = context.querySelectorAll(".js-read-smore");
    
    const options = {
      moreText: 'Read more',
      lessText: 'Read less',
      blockClassName: 'u-readmore',
      isInline: false,
    }
    
    // Pass in options param
    ReadSmore(readMores, options).init();


    //// Initializing Inline button
    const readMoresInline = context.querySelectorAll(".js-read-smore-inline");
    
    const optionsInline = {
      moreText: 'Read more',
      lessText: 'Read less',
      blockClassName: 'u-readmore--inline',
      isInline: true,
    }
    
    // Pass in options param
    ReadSmore(readMoresInline, optionsInline).init();
  },
};