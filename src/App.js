import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
import Register from './Register';


function App() {
  const client=new ApolloClient({
    uri:"http://localhost:5000/graphql",
    cache: new InMemoryCache()
  });
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GraphQL Registration Form
        </p>
      </header> */}
      <ApolloProvider client={client}>
      <Register/>
      </ApolloProvider>
    </div>
  );
}

export default App;
