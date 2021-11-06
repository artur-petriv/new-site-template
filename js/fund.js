// Throttle
function throttle(fn, ms) {
  let isThrottled = false;
  let prevArgs;
  let prevThis;

  function container() {
    if (isThrottled) {
      prevArgs = arguments;
      prevThis = this;
      return;
    }

    fn.apply(this, arguments);
    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (prevArgs) {
        container.apply(prevThis, prevArgs);
        prevArgs = prevThis = null;
      }
    }, ms);
  }

  return container;
}

// Debounce
function debounce(fn, ms) {
  let timeout;

  return function () {
    function fnCall() {
      fn.apply(this, arguments);
    }

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
}
