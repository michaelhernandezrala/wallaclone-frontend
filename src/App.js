// Libreries
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import { NewAdvert, AdvertDetail } from './components/adverts';
import { useState } from 'react';
import logout from './api/logout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgottenPassword from './pages/FogottenPassword/ForgottenPassword';
import Settings from './pages/Settings/Settings';

import { AuthContextProvider } from './components/auth/context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Swal from 'sweetalert2';

import { PrivateRoute } from './components/auth';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  console.log('isInitiallyLogged', isInitiallyLogged);

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
              {(routeProps) => <Register {...routeProps} />}
            </Route>
            <Route path='/forgottenPassword'>
              <ForgottenPassword />
            </Route>
            <PrivateRoute path='/adverts/new'>
              <NewAdvert />
            </PrivateRoute>
            <Route path='/adverts/:advertId' component={AdvertDetail} />
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
