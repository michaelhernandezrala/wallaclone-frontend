import { Redirect, Route } from 'react-router';
import { useAuth } from './context';

const PrivateRoute = (props) => {
  console.log('dentro');
  const { isLogged } = useAuth();
  console.log('isLogged', isLogged);
  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>
      {({ location }) => (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
