

//  console.log('first task');
//         console.log('second task');
//         console.log('third task');
//         console.log('fourth task');
//         for(let i = 0; i < 100; i++) {
//            console.log('delay task');
//         }

        //an asynchronous task is a task that does not block the main thread. it allows the program to continue executing other code while waiting for the asynchronous task to complete.
        // setTimeout(() => {
        //     console.log('fifth task');
        // }, 1000);

        //setTimeout is an asynchronous function that takes a callback function and a delay in milliseconds. It will execute the callback function after the specified delay without blocking the main thread.

        //callback functions are functions that are passed as arguments to other functions and are executed after the completion of the asynchronous task. it is a function that takes in another function.

        // const caller = () => {
        //     console.log('caller function');
        // }

        //FETCH is an asynchronous function that is used to make HTTP requests to a server. It returns a promise that resolves to the response of the request. The fetch function does not block the main thread, allowing the program to continue executing other code while waiting for the response. it returns a promise, they are either fufilled or rejected.


        // API requests are asynchronous by nature. When you make a request to a server, the request is sent, and the program continues executing without waiting for the server to respond.

        
        // 1. GET request is used to retrieve data from a server. It is an asynchronous operation that does not block the main thread. When you make a GET request, the program continues executing while waiting for the server to respond with the requested data.

        // 2. POST request is used to send data to a server. It is also an asynchronous operation that does not block the main thread. When you make a POST request, the program continues executing while waiting for the server to respond with the result of the operation.

        // 3. PUT request is used to update data on a server. It is an asynchronous operation that does not block the main thread. When you make a PUT request, the program continues executing while waiting for the server to respond with the updated data.

        // 4. DELETE request is used to delete data from a server. It is an asynchronous operation that does not block the main thread. When you make a DELETE request, the program continues executing while waiting for the server to respond with the result of the deletion.

        // const apiCall = () => {
        //     const check = fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        //     .then(res => res.json())
        //     .then(data => console.log(data)) 
        // }

        // apiCall();  

        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => console.log(data)).catch(err => console.error('An Error Occurred:', err));
        // The above code fetches data from the specified URL and logs it to the console. If there is an error during the fetch operation, it will log the error message to the console.

        