/*
  * Show More jQuery Plugin
  * Author: Jason Alvis
  * Author Site: http://www.jasonalvis.com
  * License: Free General Public License (GPL)
  * Version: 1.0.4
  * Date: 21.05.2013
  */
(function(a) {
  a.fn.showMore = function(b) {
    var c = {
      speedDown:300,
      speedUp:300,
      height:"265px",
      showText:"Show",
      hideText:"Hide"
    };

    return this.each(function() {
      var e=a(this),d=e.height();

      if(d>parseInt(b.height)) {
        e.find(".m-logos-group__showmore_content").css("height", b.height);
        e.find(".showmore_trigger").on("click", ".button--show-more", function() {

          a(this)[0].className = a(this)[0].className == 'button--show-more more' ? 'button--show-more less' : 'button--show-more more';

          let ariaHidden = a(this).parent().parent().children('.m-logos-group__showmore_content').children('.m-logos-group__wrapper')[0].getAttribute('aria-hidden');
          let ariaHiddenToggled = ariaHidden == 'false' ? 'true' : 'false';
          a(this).parent().parent().children('.m-logos-group__showmore_content').children('.m-logos-group__wrapper')[0].setAttribute('aria-hidden', ariaHiddenToggled); 
          
          let ariaExpandedButton = a(this)[0].getAttribute('aria-expanded');
          let ariaExpandedButtonToggled = ariaExpandedButton == 'true' ? 'false' : 'true';
          a(this)[0].setAttribute('aria-expanded', ariaExpandedButtonToggled);

          let logo_links = a(this).parent().parent().find(".m-logos-item__wrapper");

          if (ariaExpandedButton == 'false') {
            a(this).parent().next().animate({height:d},b.speedDown);
            a(this)[0].innerText = b.label_collapse;
            a(this)[0].ariaLabel = b.aria_label_collapse;

            for (let i=0; i < logo_links.length; i++ ) {
              logo_links[i].tabIndex = 0;
            }
          }
          else {
            a(this).parent().next().animate({height:b.height},b.speedUp);
            a(this)[0].innerText = b.label_expand;
            a(this)[0].ariaLabel = b.aria_label_expand;

            for (let i=0; i < logo_links.length; i++ ) {
              logo_links[i].tabIndex = -1;
            }
          }

        });
      }
    })
  }
})(jQuery);


(function ($) {
  'use strict';

  Drupal.behaviors.readMoreLogos = {
    attach(context, settings) {

      const logosGroup = $(context).find('.m-logos-group').once();

      const activeLanguage = document.location.pathname.split('/')[1];

      let label_expand = settings.logogroup.readmore.label_expand;
      let label_collapse = settings.logogroup.readmore.label_collapse;

      let aria_label_expand = settings.logogroup.readmore.aria_label_expand;
      let aria_label_collapse = settings.logogroup.readmore.aria_label_collapse;

      $(document).ready(function() {
     	
        $(logosGroup).showMore({
          speedDown: 300,
          speedUp: 300,
          height: '360px',
          label_expand,
          label_collapse,
          aria_label_expand,
          aria_label_collapse,
        });
      });

    }
  };
})(jQuery);