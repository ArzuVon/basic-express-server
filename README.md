# Node Ecosystem, TDD, CI/CD

Application development in the Node.js ecosystem, including the writing of modular code using CommonJS modules, writing tests to assert code quality, setting up and working in a "Continuous Integration"  environment (Github Actions).

## Setup a Node.js test to pass routes

![NodeJs Tests](https://user-images.githubusercontent.com/107226923/179375594-78e07d3e-4431-4387-b7f2-a125b73a7b86.png)

Created CommonJS modules

- Handler happens at the end and gives data back. Endpoint to your port (3000 or localhost) when exported

```
const app = express();

app.get('/', hello); /
app.get('/data', data);


module.exports = {
  app,
};
```

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ
  - `app.get('/resource')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.delete('/resource/:id')`

Create a simple express server

- This handle app.get invokes the hello as the / gets called and it sends back a 200 "okay" and then sends the hello world

```
const hello = (req, res) => {
   res.status(200).send('Hello, World');
};
```

### CI/CD - Continuous Integration and Deployment

- See passing tests via GitHub actions (CI)

## Deploy to Heroku using CD

### Heroku connecting to Github

![HerokuBuild](https://user-images.githubusercontent.com/107226923/179375702-3709e87e-96e0-4c5f-8ce1-dfa19be4081d.png)

### [mainProdHeroku](https://von-server-deploy-prod.herokuapp.com/data)

### [devHeroku](https://von-server-deploy-dev.herokuapp.com/data)
