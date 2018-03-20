/**
 * @param  HTMLElement
 * @param  className
 */
export function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else
    el.className = el.className.replace(
      new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
}
/**
 * @param  HTMLElement
 * @param  className
 */
export function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else el.className += " " + className;
}
/**
 * @param  HTMLElement
 * @param  className
 */
export function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    let classes = el.className.split(" ");
    const existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) classes.splice(existingIndex, 1);
    else classes.push(className);

    el.className = classes.join(" ");
  }
}
/**
 * @param  HTMLElement
 */
export function getSiblingsOf(el) {
  return Array.prototype.filter.call(el.parentNode.children, function(child) {
    return child !== el;
  });
}
