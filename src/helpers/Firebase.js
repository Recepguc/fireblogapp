import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA70KQVNpdnPdvuCzt1PZ4V-ueT3Ho6dSU",
    authDomain: "blog-page-3d264.firebaseapp.com",
    projectId: "blog-page-3d264",
    storageBucket: "blog-page-3d264.appspot.com",
    messagingSenderId: "117452135644",
    appId: "1:117452135644:web:c27e538f06885b8b7ba819"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export const createUser=async (email,password,navigate)=>{
    try{
        let userCredential=await  createUserWithEmailAndPassword(auth, email, password)
        navigate("/");

        console.log(userCredential);

    } catch(err){
        alert(err.message);
    }
  
  

};

export const signIn=async(email,password,navigate)=>{
    

  try{

    let userCredential= await signInWithEmailAndPassword(auth, email, password)
    navigate("/");
    console.log(userCredential);
   
    

} catch(err){
    alert(err.message);
}

}
export const logOut=()=>{
    signOut(auth)
    alert("Log out sucses")
}

export const userObserver = ()=>{
    
}
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });