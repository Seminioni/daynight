import { Controller } from "stimulus"
import { toggleClass } from "../utils"

export default class Header extends Controller {

  toggleMobileMenu() {
    toggleClass(this.targets.find('burgerBtn'), 'is-pressed');
    toggleClass(this.targets.find('mobileMenu'), 'is-open');
    toggleClass(document.body, 'mobile-menu-is-open');
  }
  onBurgerBtnClick(e) {
    e.preventDefault();
    this.toggleMobileMenu()
  }
  onMobileMenuExitCross() {
    this.toggleMobileMenu()
  }
}
