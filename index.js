const express = require('express');
const fetch = require("node-fetch");
const app = express();
const faker = require('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();


app.set("view engine", "ejs");
app.use(express.static("public"));
//routes
app.get('/', async (req, res) => {
  let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
  res.render('index', {"firstName":firstName,"lastName":lastName})
});

app.get('/cplusplus', async (req, res) => {
    let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
  res.render('cplusplus', {"firstName":firstName,"lastName":lastName})
});

app.get('/java', async (req, res) => {
   let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
  res.render('java', {"firstName":firstName,"lastName":lastName})
});

app.get('/python', async (req, res) => {
   let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
  res.render('python', {"firstName":firstName,"lastName":lastName})
});

app.get('/swift', async (req, res) => {
   let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
  res.render('swift', {"firstName":firstName,"lastName":lastName})
});

app.get('/example', async (req, res) => {
  let url = "https://api.unsplash.com/photos/random/?client_id=7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e&featured=true&query=planet-earth";
  let response = await fetch(url);
  let data = await response.json();
  let image = data.urls.small;
  res.render('example', {"earthUrl":image})
});

app.listen(3000, () => {
  console.log('server started');
});