import { Controller } from "stimulus"
import { toggleClass } from "../utils"

export default class Spoiler extends Controller {
  static targets = ['trigger', 'container'];

  toggleSpoiler() {
    toggleClass(this.spoiler, 'is-collapsed')
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

