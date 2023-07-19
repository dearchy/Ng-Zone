/**
 * Fibnacci Sequence
 * 
 * @param {number} n
 */
function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

// wirte a test case for fib function at below
function testFib(n) {
    console.log('fib(' + n + ') = ' + fib(n));
}

testFib(0);
testFib(1);
testFib(2);
testFib(3);