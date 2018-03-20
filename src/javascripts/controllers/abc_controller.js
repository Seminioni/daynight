import { Controller } from "stimulus";
import { addClass, removeClass, getSiblingsOf } from "../utils";

export default class Abc extends Controller {
  static targets = ["heading", "resetBtn", "grid"];

  onResetBtnClick() {
    this.headingTarget.textContent = this.headingTarget.getAttribute(
      "data-placeholder"
    );
    removeClass(this.element, "letter-is-selected");
    Array.from(this.gridTarget.children).forEach(letter =>
      removeClass(letter, "is-selected")
    );
  }

  onLettersGridClick(e) {
    if (
      !e.target.className.includes("abc__letter") ||
      e.target.className.includes("abc__letter-link")
    ) {
      return;
    }
    const targetLetter = e.target.parentNode;
    const letters = getSiblingsOf(targetLetter);
    addClass(this.element, "letter-is-selected");
    letters.forEach(letter => removeClass(letter, "is-selected"));

    addClass(targetLetter, "is-selected");

    this.headingTarget.textContent = e.target.textContent;
  }
}
