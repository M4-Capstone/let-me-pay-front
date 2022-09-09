import { Route, Switch } from "react-router-dom";
import Login from "../pages/login.page";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register"></Route>
    </Switch>
  );
};

export default Routes;
