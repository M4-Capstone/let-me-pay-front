import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Dashboard from "../pages/dashboard.page";
import Login from "../pages/login.page";
import Register from "../pages/register.page";
import { isJwtExpired } from 'jwt-check-expiration';
import { useEffect, useState } from "react";

const Routes = () => {

  const history = useHistory()


  useEffect(()=>{
    const token = localStorage.getItem("@tokenLMP")
    
    if(token){

      const verified = isJwtExpired(token)

      if(!verified){
        history.push("/dashboard")
      }else{
        history.push("/login")
      }
    }
  }, [])

  
  return (
    <Switch>
      
      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>

    </Switch>
  );
};

export default Routes;
