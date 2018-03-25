import { Controller } from "stimulus"
import { toggleClass } from "../utils"

export default class Spoiler extends Controller {
  static targets = ['trigger', 'willHidden'];

  toggleSpoiler() {
    const className = this.element.getAttribute('data-classname')

    Array.from(this.willHiddenTargets).forEach(willHidden => toggleClass(willHidden, className))
    toggleClass([
      [this.element, className]
    ])
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

