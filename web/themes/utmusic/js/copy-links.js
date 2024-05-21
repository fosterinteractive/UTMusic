Drupal.behaviors.copyLinks = {
  attach(context) {

    document.querySelectorAll(".m-item__copy-links").forEach(copyLinkContainer => {
      const copyAbsoluteButton = copyLinkContainer.querySelector(".is-absolute");
      const copyRelativeButton = copyLinkContainer.querySelector(".is-relative");

      copyAbsoluteButton.addEventListener("click", (e) => {
        const copyText = copyLinkContainer.querySelector(".is-absolute-text");
        const link = copyText.innerHTML;

        e.preventDefault();

        window.navigator.clipboard.writeText(link);
      });

      copyRelativeButton.addEventListener("click", (e) => {
        const copyText = copyLinkContainer.querySelector(".is-relative-text");
        const link = copyText.innerHTML;

        e.preventDefault();

        window.navigator.clipboard.writeText(link);
      });
    });
  },
};