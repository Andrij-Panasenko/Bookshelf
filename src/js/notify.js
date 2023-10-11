import Notiflix from 'notiflix';

export function warningNotify() {
  Notiflix.Notify.warning('Ooops, something went wrong. Try reloading page');
}
