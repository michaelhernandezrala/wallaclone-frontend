// Libreries
import { Switch, Link, Route } from 'react-router-dom';

// CSS
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
