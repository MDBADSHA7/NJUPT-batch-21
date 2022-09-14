// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb4UZ2m-YJTEcUeOVDWFlncSMc-92qDBE",
    authDomain: "njuptan-batch-21.firebaseapp.com",
    projectId: "njuptan-batch-21",
    storageBucket: "njuptan-batch-21.appspot.com",
    messagingSenderId: "126121887351",
    appId: "1:126121887351:web:ff459d16ea0330e8876872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;