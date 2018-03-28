import { Controller } from "stimulus";
import initSiema from "../components/slider";
import initZoom from "../components/zoom";
import { rmCl } from "../utils";

export default class CardSlider extends Controller {
  static targets = ["slide"];

  initialize() {
    this.slideTargets.forEach(slide => {
      initZoom(slide, {
        zoom: 2,
        paneContainer: this.element,
        hoverBoundingBox: true
      });
    });

    initSiema({
      selector: this.element,
      duration: 300,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      draggable: false,
      multipleDrag: false,
      threshold: 20,
      loop: true,
      onInit: function() {
        this.addArrows();
        this.selector.classList.remove('is-initing');
      }
    });
  }

  connect() {
    rmCl(this.element.parentNode, "is-loading");
  }
}
