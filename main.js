
console.log('1: sync start');

setTimeout(() => console.log('4: setTimeout 0'), 0);

setImmediate(() => console.log('5: setImmediate'));

Promise.resolve().then(() => console.log('3: promise'));

console.log('2: sync end');

/*What's guaranteed:
Synchronous logs run first, in order.
The resolved Promise's .then runs right after the sync code, before any timers or immediates.
From the main module, setTimeout(0) vs setImmediate order isn't guaranteed. It depends on process performance and timing.
Inside an I/O callback, setImmediate always runs before setTimeout(0).*/