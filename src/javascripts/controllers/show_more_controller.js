import { Controller } from "stimulus"
import { tgCl } from "../utils"

export default class ShowMore extends Controller {
  static targets = ['string', 'trigger'];

  initialize() {
    this.originalString = this.string.textContent;

    const words = this.string.textContent.split(' ').filter(word => word !== '');

    if (words.length <= 5) {
      this.data.set('short-string', true);
      this.triggerTarget.remove()
    } else {
      this.data.set('short-string', false);
      const edited = words.splice(0, +this.data.get('length')).join(' ');
      this.editedString = `${edited}...`.trim()
      this.string.textContent = this.editedString;
    }
  }

  onTriggerAction() {
    const isCollapsed = this.element.classList.contains('is-collapsed');
    const shortString = JSON.parse(this.data.get('short-string'));

    if (!shortString) {
      tgCl([
        [this.triggerTarget, 'is-hidden'],
        [this.element, 'is-collapsed']
      ]);
      if (isCollapsed) {
        this.string.textContent = this.originalString;
      } else {
        this.string.textContent = this.editedString;
      }
    } else {
      return;
    }
  }

  get string() {
    return this.stringTarget;
  }

}
