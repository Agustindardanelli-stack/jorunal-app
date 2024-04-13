// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJh6JAqWJjcx_sDygz_8yZdkppBk6czxg",
  authDomain: "react-cursos-fae52.firebaseapp.com",
  projectId: "react-cursos-fae52",
  storageBucket: "react-cursos-fae52.appspot.com",
  messagingSenderId: "57225536083",
  appId: "1:57225536083:web:947957cd576902989ddca6"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );