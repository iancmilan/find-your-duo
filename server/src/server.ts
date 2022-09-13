import express from "express"

const app = express ()

app.get('/ads', (request, response) => {
  console.log('acessou adfs')
})

app.listen(3333)