// Async code

const fetchData = () => {
    // promise constructor function
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
   
};

setTimeout(() => {
    console.log('Timer is done!');

    // fetchData Function Call

    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);    
        });
}, 2000);

// Sync code
console.log('Hello!');
console.log('Hi!');