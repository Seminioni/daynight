import { Controller } from "stimulus";
import initSiema from "../components/slider";
import initZoom from "../components/zoom";

export default class CardSlider extends Controller {
  static targets = ["slide"];

  initialize() {
    this.slideTargets.forEach(slide => {
      initZoom(slide, {
        zoom: 2,
        paneContainer: this.element
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
      }
    });
  }
}
