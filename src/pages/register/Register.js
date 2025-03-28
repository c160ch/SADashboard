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
import Widget from "../../components/Widget/Widget.js";
import Footer from "../../components/Footer/Footer.js";

import loginImage from "../../assets/registerImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import { registerUser } from "../../actions/register.js";
import hasToken from "../../services/authService";
import {loginWGoogle, provider ,loginUser,successLogin,loginError} from "../../actions/auth.js";
import {auth} from "../../actions/register.js";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Register = (props) => {
  const [state, setState] = useState({ email: '', password: ''} )

  const changeCred = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const doRegister = (event) => {
    event.preventDefault();
    props.dispatch(registerUser({
      creds: state,
      history: props.history,
    }))
  }
  
  const [forceRender, setForceRender] = useState(0);
  
  
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
  }
  

  const { from } = props.location.state || { from: { pathname: '/template' } }

  if (hasToken(JSON.parse(localStorage.getItem('authenticated')))) {
	   console.log("this is from register",from);

    return (
      <Redirect to={from} />
    );
  }

  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6} className="left-column">
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Sign Up</p>
                <div className="logo-block">
                  <SofiaLogo />
                  <p className="mb-0">Scouting angels</p>
                </div>
              </div>
              <form onSubmit={(event => doRegister(event))}>
                <FormGroup className="my-3">
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCred(event)}
                    type="email"
                    required
                    name="email"
                    placeholder="Henry Monk"
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
                    onChange={(event => changeCred(event))}
                    type="password"
                    required
                    name="password"
                    placeholder="Place your password here"
                  />
                </FormGroup>
                <div className="mb-3">
                  <p className="body-3 text-muted mb-0">By registering, you agree to our <a href="">Terms</a> and <a href="">Privacy Policy.</a></p>
                </div>

                <div className="bg-widget d-flex justify-content-center">
                  <Button className="rounded-pill my-3" type="submit" color="secondary-red">Sign Up</Button>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Login with</p>
                  <div className="socials">
                    <a href="#" onClick={(event =>doGoogleLogin(event))}><GoogleIcon /></a>
                  </div>
                </div>
                <Link to="/login">Enter the account</Link>
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

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Register));
