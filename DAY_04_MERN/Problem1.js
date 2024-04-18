// Counter using closure
function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("Counter:", count);
  }

  function decrement() {
    count--;
    console.log("Counter:", count);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();
counter.increment(); // Output: Counter: 1
counter.increment(); // Output: Counter: 2
counter.decrement(); // Output: Counter: 1

// Rate Limiter using closure
function createRateLimiter(limit) {
  let count = 0;

  function canExecute() {
    if (count < limit) {
      count++;
      return true;
    } else {
      return false;
    }
  }

  function reset() {
    count = 0;
  }

  return {
    canExecute,
    reset,
  };
}

const limiter = createRateLimiter(2);
console.log(limiter.canExecute()); // Output: true
console.log(limiter.canExecute()); // Output: true
console.log(limiter.canExecute()); // Output: false
limiter.reset(); // Resetting the limiter
console.log(limiter.canExecute()); // Output: true
