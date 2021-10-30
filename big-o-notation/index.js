const {
    performance,
  } = require('perf_hooks');


  // Operations are == to N * 4  + and =
function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// Three operations with this function, N does not add additional operations
// O(1)
function addUpToFaster(n) {
    return n * (n + 1) / 2;
}

function measureSpeed(func, params) {
    let t1 = performance.now();
    func(...params);
    t2 = performance.now();
    return(`Time Elapsed: ${(t2- t1) / 1000} seconds.`)
}

console.log(measureSpeed(addUpTo, [1000000000]))
console.log(measureSpeed(addUpToFaster, [1000000000]))


/**
 * Big O Definition
 * 
 * an algorithm is O(f(n))
 * 
 * f(n) could be linear (f(n) = n)
 * f(n) could be quadratic (f(n) = n^2)
 * f(n) could be constant (f(n) = 1)
 * f(n) could be something entirely different
 */

function countUpAndDown(n) {
    console.log("Going Up!");
    // O(n)
    for (let i =0; i < n; i++) {
        console(i);
    }
    console.log("At the top!\nGoing Down...");
    // O(n)
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

function printAllPairs(n) {
    // O(n)
    for (var i = 0; i < n; i++) {
        // O(n)
        for (var j = 0; j < n; j++) {
            // O(n^2)
            console.log(i, j);
        }
    }
}
// O(n)
function logAtLeast(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
// O(1)
function logAtMost(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// SPACE COMPLEXITY ( Auxiliary Complexity ) =======================
/**
 * Most primitives are constant space.
 * Strings require O(n) length of string
 * Reference types are generally O(n) length of array, number of keys
 */

