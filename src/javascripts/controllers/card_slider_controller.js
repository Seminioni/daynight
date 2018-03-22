import { Controller } from "stimulus";
import initSiema from "../components/slider";

export default class CardSlider extends Controller {
  // static targets = ["heading", "resetBtn", "grid"];

  initialize() {
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
      },
    })
  }

}
