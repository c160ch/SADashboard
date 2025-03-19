import { getAuth, signOut,signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { toast } from 'react-toastify';
import {auth} from "./register.js";

export const provider = new GoogleAuthProvider();

export const LOGIN_REQUEST='LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

//export const auth = getAuth();

export function receiveLogin() {
  return {
    type: LOGIN_REQUEST
  };
}

export function successLogin() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginError(payload) {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

// logs the user out
export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
	
	signOut(auth).then(() => {
  // Sign-out successful.
  console.log("Log out successfull.", auth);
     localStorage.removeItem('authenticated');
    dispatch(receiveLogout());

    }).catch((error) => {
  // An error happened.
       console.log("Log out error", error);
	   
	   toast.error(`Error logout`,error);
    });
	
  };
}

export function loginUser(creds) {
  return (dispatch) => {
    dispatch(receiveLogin());
    if (creds.email.length > 0 && creds.password.length > 0) {
	  console.log("Before signinWith Email");
      signInWithEmailAndPassword(auth, creds.email, creds.password)
       .then((userCredential) => {
      // Signed in 
       const user = userCredential.user;
       localStorage.setItem('authenticated', true);
	   console.log("this is the userCredentials=>",userCredential);
	   
	   dispatch(successLogin());
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
		   console.log("Before signinWith Email", errorCode, errorMessage);
		   localStorage.setItem('authenticated', false);
		   localStorage.setItem('errorMessage', error.message);
		  dispatch(loginError('Something was wrong. Try again', error.code,error.message));
		  toast.error(`Please register before login or ensure your email and password are correct`,error);
			
		  
      });
    } else {
		localStorage.setItem('authenticated', false);
		localStorage.setItem('errorMessage', "No user and password");
      dispatch(loginError('Something was wrong. Try again'));
	  toast.error(`Email and password can not be blank`);
    }
  }
}



export function loginWGoogle(auth,provider){
	return (dispatch)=>{

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
	console.log("this is the user=>",user, token);
       localStorage.setItem('authenticated', true);
	   dispatch(successLogin());
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
      dispatch(loginError('Something was wrong. Try again'));
	  toast.error(`Email and password can not be blank`);

    // ...
  });


	}
}

