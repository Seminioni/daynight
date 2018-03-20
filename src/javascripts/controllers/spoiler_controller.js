import { Controller } from "stimulus"
import { toggleClass } from "../utils"

export default class Spoiler extends Controller {
  static targets = ['trigger', 'container'];

  toggleSpoiler() {
    const className = this.element.getAttribute('data-classname')
    toggleClass(this.spoiler, className)
  }

  onTriggerAction(e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
    }
    this.toggleSpoiler()
  }

  get spoiler() {
    return this.containerTarget
  }

}

