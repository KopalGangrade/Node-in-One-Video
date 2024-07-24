// Fast, unopinionated, minimalist web framework for Node.js


// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res,next) => {
  res.send('Hello World!')
  next()
}
)
app.get('/about', (req, res,next) => {
    res.send('This is about page')
    next()
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})