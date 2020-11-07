import logo from './logo.svg';
import './App.css';
import { Form } from './lib/components/form';
import List from './lib/components/List';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from './lib/components/navbar';

function App() {
  return (

    <Router>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <div>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/Form' component={Form}></Route>
              <Route path='/List' component={List}></Route>

            </Switch>
          </div>
        </header>
        <footer>
          <div class="demo">

          </div>
        </footer>
      </div>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </Router>

  );
}

const Home = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" /><br/>
    <img src={logo} className="App-logo" alt="logo" /><br/>
    <img src={logo} className="App-logo" alt="logo" /><br/>
    <img src={logo} className="App-logo" alt="logo" /><br/>

    <p>
      Edit <code>src/App.js</code> and save to reload.</p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
      </a>

  </div>

);

export default App;
