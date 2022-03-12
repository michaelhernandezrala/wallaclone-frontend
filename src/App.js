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
import ForgottenPassword from './pages/FogottenPassword/ForgottenPassword';
import { useState } from 'react';
import logout from './api/logout';
import { AuthContextProvider } from './utils/context';
import Swal from 'sweetalert2';

// Components

import { NewAdvert, AdvertDetail } from './components/adverts';
import { PrivateRoute } from './components/auth';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        setIsLogged(false);
      }
    });
  };
  return (
    <Router>
      <div className='App'>
        <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/account/settings'>
              <Settings />
            </Route>
            <Route path='/login'>
              {(routeProps) => <Login {...routeProps} />}
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/forgottenPassword'>
              <ForgottenPassword />
            </Route>
            {/* <PrivateRoute path="/adverts/new" component={NewAdvert}>
                </PrivateRoute>  */}
            <Route path='/adverts/new' component={NewAdvert}></Route>
            <Route path='/adverts/:advertId' component={AdvertDetail}></Route>
            <Route>
              <Redirect to='/home' />
            </Route>
            <Route path='/404'>
              <div>404 || Not Found Page</div>
              <Link style={{ color: 'rgb (1, 165, 130)' }} to='/'>
                Back
              </Link>
            </Route>
            <Route>
              <Redirect to='/404' />
            </Route>
          </Switch>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
