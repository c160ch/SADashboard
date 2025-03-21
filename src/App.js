// -- React and related libs
import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { HashRouter } from "react-router-dom";

// -- Redux
import { connect } from "react-redux";

// -- Custom Components
import LayoutComponent from "./components/Layout/Layout";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TermsPage from "./pages/terms/TermsPage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import DisclaimerPage from "./pages/disclaimer/DisclaimerPage";

// -- Redux Actions
import { logoutUser } from "./actions/auth";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_iO0OmHJjHiksR0HjyoUOSMNS0017Q3B9xA');


const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated(JSON.parse(localStorage.getItem("authenticated")))) {
    dispatch(logoutUser());
	console.log("logout from APP");
    return (<Redirect to="/login" />)
  } else {
    return (
      <Route { ...rest } render={props => (React.createElement(component, props))} />
    );
  }
};

const App = (props) => {
	
	const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{REACT_APP_CLIENT_SECRET}}',
  };
	
  return (
    <div>
      <ToastContainer
	  position="top-center"
autoClose={60000}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable={false}
theme="colored"

	  />
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/login" />} />
          <Route path="/template" exact render={() => <Redirect to="/template/dashboard"/>}/>
          <PrivateRoute path="/template" dispatch={props.dispatch} component={LayoutComponent} />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/register" exact component={Register} />
		  <Route path="/terms" exact component={TermsPage} />
		  <Route path="/privacy" exact component={PrivacyPage} />
		  <Route path="/disclaimer" exact component={DisclaimerPage} />
          <Route component={ErrorPage}/>
          <Route path='*' exact={true} render={() => <Redirect to="/error" />} />
        </Switch>
      </HashRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
