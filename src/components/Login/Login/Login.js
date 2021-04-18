import React, { useContext, useState } from 'react';
import firebaseConfig from './firebase.config';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import { Button } from 'react-bootstrap';
import loginBG from '../../../images/loginBG.jpg';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    const setUserToken = () =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token',idToken);
          }).catch(function(error) {
            // Handle error
          });
    }

    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const [user,setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        photo: ""
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          const { displayName, photoURL, email } = res.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
          };
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from);

          setUserToken();

          console.log(displayName, email, photoURL);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.message);
        });
    };

    return (

    <div className="container">
    <div className="row align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 p-5">
            <h4>Login Here </h4>
            <div className="form-group">
                <label htmlFor="">User Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control" />
            </div>
         
            <div className="from-group mt-5">
                <Button className="btn btn-brand" onClick={handleGoogleSignIn}>
                    Google Sign in
                </Button>
            </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={loginBG} alt="" />
        </div>
    </div>
</div>
    );
};

export default Login;