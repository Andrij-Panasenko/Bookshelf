export function scrollForbidden() {
  document.body.classList.add('no-scroll')
}

export function scrollAllow() {
  document.body.classList.remove('no-scroll')
}