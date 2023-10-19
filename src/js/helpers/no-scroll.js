export function scrollForbidden() {
  document.body.style.overflow = 'hidden';
}

export function scrollAllow() {
  document.body.style.removeProperty('overflow');
}