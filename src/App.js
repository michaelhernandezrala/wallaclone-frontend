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
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// Components

import { NewAdvert, AdvertDetail } from './components/adverts';
import { PrivateRoute } from './components/auth';
import { useState } from "react";
import { AuthContextProvider } from "./components/auth/context";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  // const handleLogout = () => {
  //   logout().then(() => setIsLogged(false));
  // };

  return (
    <Router>
      <AuthContextProvider value={{ isLogged, handleLogin }}>
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
            {/* <PrivateRoute path="/adverts/new" component={NewAdvert}>
                </PrivateRoute>  */}
            <Route path="/adverts/new" component={NewAdvert}>
            </Route>
            <Route path="/adverts/:advertId" component={AdvertDetail
            }>
            </Route>
            <Route>
              <Redirect to="/home" />
            </Route> 
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
