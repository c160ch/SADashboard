import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from 'firebase/app';
import { getDatabase,ref,set,get, child } from "firebase/database";
import { doc, collection, query, where, getDocs , getFirestore, orderBy, limit,setDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {loginUser} from "./auth.js";

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID

};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const database = getDatabase();

export const dbRef = ref(getDatabase());
export const auth = getAuth();

export function receiveRegister() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function registerError(payload) {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
}
export function loadCalls(){
	return (calls)=>{
		
			calls = new Map();
			console.log("loading");
			const qq = query(collection(db, "calls"), orderBy("Time", "desc"), limit(10));
		
			console.log("before select");
			getDocs(qq).then(
			querySnapshot=>{
			querySnapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data());
			calls.set(doc.id, doc.data());
			
			
		});
				}	
		);

		

		
}
}
export function registerUser(payload) {
  return (dispatch) => {
    if (payload.creds.email.length > 0 && payload.creds.password.length > 0) {
		
		console.log(`registering user. user= ${payload.creds.email}`);
		console.log(`registering user. password= ${payload.creds.password}`);
		
		const q = query(collection(db, "users"), where("email", "==", `${payload.creds.email}`));
		
		var existsInDB= false;

		getDocs(q).then(
			querySnapshot=>{
			querySnapshot.forEach((doc) => {
			console.log(doc.id, " => ", doc.data());
			existsInDB = true;
			
			
		});

		}	
		);
		
		if(existsInDB==false){
			console.log("not exists in db");
            createUserWithEmailAndPassword(auth, `${payload.creds.email}`, `${payload.creds.password}`)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("Reach here", user);
				//user.uid
			   const userRef = doc(db,"users",user.uid);
			   setDoc(userRef,{
				   email:`${user.email}`,
				   phoneNumber:`${user.phoneNumber}`,
				   emailVerified:`${user.emailVerified}`,
				   displayName:`${user.displayName}`,
				   photoURL:`${user.photoURL}`
			   });
               // check email exists ? 
               //insert into firebase
               console.log("before notification");
	           toast.info("You've been registered successfully");
	           console.log("after notification");
               payload.history.push('/login');
			   dispatch(receiveRegister());
//			   payload.isAuthenticated = true;
			   dispatch(loginUser({ password: payload.creds.password, email: payload.creds.email }));
         // ...
             })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
	            console.log(errorCode, " => ", errorMessage);
	            toast.error(`Please rectify the error before proceed. ${errorMessage}`);
                // ..
	            dispatch(registerError("Something was wrong. Try again"));
            });
        }else{
			
			dispatch(registerError("Email already exists"));
		}

//		console.log("before load calls");
//		var cc = loadCalls();
//		console.log("after load calls");
//		const querySnapshot = getDocs(q);
//		querySnapshot.forEach((doc) => {//
  // doc.data() is never undefined for query doc snapshots
//			console.log(doc.id, " => ", doc.data());
//		});
		
    } else {
		console.error("Something wrong");
		toast.warning("Please fill in email and password to signup");
      dispatch(registerError("Something was wrong. Try again"));
    }
  }
}

