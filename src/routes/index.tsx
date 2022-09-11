import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard.page";
import Login from "../pages/login.page";

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/register">
        
      </Route>
      
      <Route path="/dashboard">
        <Dashboard/>
      </Route>

      <Redirect from= "/" to= "dashboard"/>
    </Switch>
  );
};

export default Routes;
