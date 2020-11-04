import logo from './logo.svg';
import './App.css';
import { Form } from './lib/components/form';
import List from './lib/components/List';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React      

        </a>
        <div>
        <Form></Form>
        <List></List>
        </div>
      </header>
      <footer>
        <div class="demo">

        </div>
      </footer>
    </div>
    
  );
}

export default App;
