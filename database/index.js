const { Client } = require('elasticsearch');

const client = new Client({
  host: 'localhost:9200',
});

client.indices.create({
  index: 'movie',
  body: {
    mappings: {
      movie: {}
    }
  },
}, (err, res) => {
  console.log(err, res);
});

client.indices.create({
  index: 'comment',
  body: {
    mappings: {
      comment: {}
    }
  },
}, (err, res) => {
  console.log(err, res);
});
