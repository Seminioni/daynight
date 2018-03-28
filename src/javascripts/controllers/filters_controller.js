import { Controller } from "stimulus";
import { addCl, rmCl } from "../utils";
import Choices from 'choices.js';

export default class Filters extends Controller {
  static targets = ["trigger", "filter"];

  initialize() {
    this.filterTargets.forEach(this.initFilter)
  }

  initFilter(filter) {
    new Choices(filter, {
      searchEnabled: false
    })
  }

  onTriggerAction() {
    if (!JSON.parse(this.data.get("are-open"))) {
      this.data.set("are-open", true);
      addCl(this.triggerTarget, "is-pressed");
      addCl(this.element, "are-open");
      addCl(document.body, 'modal-is-open');
    }
  }
  onExitBtnAction() {
    if (JSON.parse(this.data.get("are-open"))) {
      this.data.set("are-open", false);
      rmCl(this.triggerTarget, "is-pressed");
      rmCl(this.element, "are-open");
      rmCl(document.body, 'modal-is-open');
    }
  }
}
