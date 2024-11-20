import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateUser from './Components/CreateUser';
import ListOfUsers from './Components/ListOfUsers';

function App() {


  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
      <CreateUser/>
      <ListOfUsers/>
    </ApolloProvider>
  );
}

export default App;