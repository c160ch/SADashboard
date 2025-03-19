import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import Footer from "../../components/Footer/Footer";
//import { loginUser, signInWithPopup, auth } from "../../actions/auth";
import {loginUser, provider,successLogin,loginError} from "../../actions/auth.js";
import {auth} from "../../actions/register.js";
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";



const Login = (props) => {

  const [state, setState] = useState({
    email: 'admin@flatlogic.com',
    password: 'password',
  })

  const doLogin = (e) => {
    e.preventDefault();
	console.log("the userpassword",state.email, state.password);
    props.dispatch(loginUser({ password: state.password, email: state.email }));
  }
  

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  
    const doGoogleLogin=(event)=>{
	  console.log("do Google login");
	  
	console.log("login with google");
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
	console.log("doGoogleLogin  is the user=>",user, token);
       localStorage.setItem('authenticated', true);
	   props.dispatch(successLogin());
	   //store the token
//	   triggerRerender();
	
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
			localStorage.setItem('authenticated', false);
		localStorage.setItem('errorMessage', "No user and password");
    props.dispatch(loginError('Something was wrong. Try again'));
//	  toast.error(`Email and password can not be blank`);

    // ...
  });

	  
//	  loginWGoogle(auth,provider);
	  
  }
  
  const doAA=(event)=>{
	  console.log("Do AA");
  }

  const { from } = props.location.state || { from: { pathname: '/template' }};
  if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
    console.log("this is from",from);
    return (
      <Redirect to={from} />
    )
  }

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Login</p>
              </div>
              <div className="auth-info my-2">
                <p>This is a real app with Node.js backend - use <b>"admin@flatlogic.com / password"</b> to login!</p>
              </div>
              <form onSubmit={(event) => doLogin(event)}>
                <FormGroup className="my-3">
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCreds(event)}
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup  className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Password</FormText>
                    <Link to="/error">Forgot password?</Link>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={(event) => changeCreds(event)}
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-center">
                  <Button className="rounded-pill my-3" type="submit" color="secondary-red">Login</Button>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Login with</p>
                  <div className="socials">
                    <a href="#" onClick={(event =>doGoogleLogin(event))}><GoogleIcon /></a>
                  </div>
                </div>
                <Link to="/register">Don’t have an account? Sign Up here</Link>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className="right-column">
            <div>
              <img src={loginImage} alt="Error page" />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}


Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
