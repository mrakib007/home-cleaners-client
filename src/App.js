import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
   <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
    <PrivateRoute>
      <DashBoard></DashBoard>
    </PrivateRoute>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
