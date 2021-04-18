import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';
// import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUSer , setLoggedInUser] = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
         ( loggedInUSer.email || sessionStorage.getItem('token')) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;