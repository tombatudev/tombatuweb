import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost/wordpress/graphql', // Ganti dengan URL WP GraphQL endpoint kamu
  cache: new InMemoryCache(),
});

export default client;
