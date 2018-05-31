import { Client } from 'elasticsearch';

const client = new Client({
  host: 'http://elasticsearch:9200',
});

export default client;
