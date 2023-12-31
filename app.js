// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {getFirestore, setDoc, doc,  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt_OImtFReluoLA6tuGWz5_O8go3Fovoo",
  authDomain: "mini-hachton.firebaseapp.com",
  projectId: "mini-hachton",
  storageBucket: "mini-hachton.appspot.com",
  messagingSenderId: "510208638784",
  appId: "1:510208638784:web:037a0d4425471d496004a5",
  measurementId: "G-PE4LN8033Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



// 
const firstname = document.querySelector('#firstName')
// console.log(firstname);
const lastname = document.querySelector('#LastName')
// console.log(lastname);
const signupemail = document.querySelector('#email-MobNum')
// console.log(signupemail);
const Repeatpassword = document.querySelector('#Repeat-Password')
// console.log(Repeatpassword);
const password = document.querySelector('#New-Password')
// console.log(password);

const signupbtn = document.querySelector('#signup-btn')
// console.log(signupbtn);


signupbtn.addEventListener('click', signuphandler)

function signuphandler() {


  
  createUserWithEmailAndPassword(auth, signupemail.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user)
    if (user) {
      adddata (user.uid);    
      fieldempty ();
    }
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });


 


function fieldempty () {
    firstname.value = ''
    lastname.value = ''
    signupemail.value = ''
    Repeatpassword.value = ''
    password.value = ''
}


async function adddata (uid) {
  try {
      const docRef = await setDoc(doc(db, "users",uid), {
          firstname : firstname.value,
          lastname : lastname.value,
          signupemail :signupemail.value,   
      });
    
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
}



const loginEmailAddress = document.querySelector('#loginEmailAddress')
//  console.log(loginEmailAddress)
 const loginPassword = document.querySelector('#loginPassword')
//  console.log(loginPassword)




loginBtn.addEventListener('click', loginhandler)


function  loginhandler (){
  signInWithEmailAndPassword(auth, loginEmailAddress.value,  loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user)
    if (user) {
      // loginfieldempty ()
      window.location.href = '../dashboard/dashboard.html'
      
    }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}}