1.  Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

2.  - Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
    - During this time the thread should not be able to do anything else.
    - the function should return a promise just like before

3.  - Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
    - Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
    - Return a promise.all which return the time in milliseconds it takes to complete the entire operation.

4.  - Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
    - Write a function that sequentially calls all 3 of these functions in order.
    - Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
    - Compare it with the results from 3-promise-all.js
