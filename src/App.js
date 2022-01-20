import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
import Register from './Register';
import Login from './Login';


function App() {
  const client=new ApolloClient({
    uri:"http://localhost:5000/graphql",
    cache: new InMemoryCache()
  });
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <Register/>
      <Login/>
      </ApolloProvider>
    </div>
  );
}

export default App;
