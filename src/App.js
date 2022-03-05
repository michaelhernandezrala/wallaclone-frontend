// Libreries
import { Switch, Link, Route } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Components

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/account/settings'>
          <Settings />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
