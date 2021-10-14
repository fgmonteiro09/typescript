import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({message: 'Hi Everyone'})
})

app.listen(3333);