const express = require('express')
const app = express()
const port = 3000
const cookieParser = require("cookie-parser");

/*
Create an Express application that sets a cookie when routed to /login with their name. 
If a cookie is present with a name key, then it says "Welcome {name}! when the user routes to /hello".
*/ 
app.use(cookieParser());

app.get('/login', function(req, res) {
  let { name } = req.query;
  console.log("Query", name)
  if (name !== undefined) {
    res.status(200).cookie('name', `${name}`).send(`Cookie set to: ${name}. Now go to /hello`)
  } else {
    res.status(200).send("No name supplied, try /login?name=yourname ")
  }
 });

app.get('/hello', (req, res) => {
  res.send(`Hello ${req.cookies.name}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))