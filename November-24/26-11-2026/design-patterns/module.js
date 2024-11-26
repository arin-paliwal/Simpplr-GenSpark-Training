// The Module Pattern is a design pattern used to organize and encapsulate code into reusable, independent units called modules. It allows you to create private variables and methods while exposing only what is necessary, making your code easier to maintain and preventing conflicts.

// the Module Pattern hides internal details (private variables and functions) and exposes only what is necessary through a public API.

const CounterModule = (function () {
    let count = 0;
    function log(message) {
        console.log(`[CounterModule]: ${message}`);
    }
    return {
        increment() {
            count++;
            log(`Count incremented to ${count}`);
        },
        decrement() {
            if (count > 0) {
                count--;
                log(`Count decremented to ${count}`);
            } else {
                log('Count is already at 0');
            }
        },
        getCount() {
            log(`Current count is ${count}`);
            return count;
        },
    };
})();

CounterModule.increment(); // Count incremented to 1
CounterModule.increment(); // Count incremented to 2
CounterModule.getCount();  // Current count is 2
CounterModule.decrement(); // Count decremented to 1
CounterModule.decrement(); // Count decremented to 0
CounterModule.decrement(); // Count is already at 0
