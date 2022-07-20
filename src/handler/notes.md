```
javascript

// app.use(something - a middleware); //something is middleware

//What is a handler? - function

function handler(req, res, next){
  //request: is an object with a query, endpoints, URL - things the browser sends to the server when

  //response: status, body - what you get back from a server

  //next: a function passed to the middleware , to pass control to the "next"
}
```
