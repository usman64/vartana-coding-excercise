import React, { useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/login/login-page.component";
import DashboardPage from "./pages/dashboard-page/dashboard.component.jsx";
import AddFormPage from "./pages/add-form/add-form.component";
import Header from "./components/header/Header.component";
import Layout from "./components/layout/layout.component";
import { GlobalContext } from "./context/globalState";
import PrivateRoute from "./components/routing/private-route.component.jsx";

const ViewFormsPage = () => <div>ViewForms page</div>;

const App = () => {
  const GlobalState = useContext(GlobalContext);
  console.log(GlobalState);
  return (
    <div>
      <Header />
      <Layout>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={DashboardPage} />
          <PrivateRoute path="/addform" component={AddFormPage} />
          <PrivateRoute path="/viewforms" component={ViewFormsPage} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
