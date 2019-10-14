const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://username:password@ds135068.mlab.com:35068/gql-stock'
);
mongoose.connection.once('open', () => {
  console.log('conected to database');
});

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
