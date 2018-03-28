import { Controller } from "stimulus"
import { tgCl } from "../utils"

export default class Header extends Controller {
  static targets = ['burgerBtn', 'mobileMenu'];
  toggleMobileMenu() {
    tgCl(this.burgerBtnTarget, 'is-pressed');
    tgCl(this.mobileMenuTarget, 'is-open');
    tgCl(document.body, 'modal-is-open');
  }
  onBurgerBtnClick(e) {
    e.preventDefault();
    this.toggleMobileMenu()
  }
  onExitBtnClick() {
    this.toggleMobileMenu()
  }
}
