// Libreries
import { Switch, Link, Route } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';

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
      </Switch>
    </div>
  );
}

export default App;
