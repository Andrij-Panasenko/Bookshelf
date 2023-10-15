export function throttle(func, ms) {
  let isThrottled = false;
  let saveArgs;
  let saveThis;

  function wrapper() {
    if (isThrottled) {
      saveArgs = arguments;
      saveThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;

      if (saveArgs) {
        wrapper.apply(saveThis, saveArgs);
        saveArgs = saveThis = null;
      }
    }, ms);
  }

  return wrapper;
}
