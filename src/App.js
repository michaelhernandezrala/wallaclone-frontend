// Libreries
import { 
  BrowserRouter as Router,
  Switch, 
  Link, 
  Route, 
  Redirect, 
} from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';

import { NewAdvert } from './components/adverts';
import { PrivateRoute } from './components/auth';
import { useState } from "react";
import { AuthContextProvider } from "./components/auth/context";


function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="App">
          <Switch>
            <Route exact path='/'>
            <Home />
            </Route>
            <PrivateRoute path="/adverts/new" component={NewAdvert}>
            </PrivateRoute> 
            <Route path="/404">
                <div>404 || Not Found Page</div>
                <Link style={{ color: "rgb (1, 165, 130)" }} to="/">
                  Back
                </Link>
            </Route>
            <Route>
                <Redirect to="/404" />
            </Route> 
          </Switch>
        </div>
      </AuthContextProvider>
    
    </Router>
  );
}

export default App;
