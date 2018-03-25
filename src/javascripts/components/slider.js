import Siema from "siema";

export class ExtendedSiema extends Siema {

  addArrows() {
    this.arrowLeft = document.createElement("span");
    this.arrowRight = document.createElement("span");
    this.arrowLeft.classList.add("arrow", "arrow--left");
    this.arrowRight.classList.add("arrow", "arrow--right");

    this.selector.parentNode.insertBefore(
      this.arrowLeft,
      this.selector.nextSibling
    );
    this.selector.parentNode.insertBefore(
      this.arrowRight,
      this.selector.nextSibling
    );

    this.arrowLeft.addEventListener("click", () => this.prev());
    this.arrowRight.addEventListener("click", () => this.next());
  }
}


export default options => new ExtendedSiema(options);
