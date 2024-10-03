
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyBTF1lLONSRkfsEPpLE1Q-xP0NjqpKDDJw",

  authDomain: "oribe-6f312.firebaseapp.com",

  projectId: "oribe-6f312",

  storageBucket: "oribe-6f312.appspot.com",

  messagingSenderId: "528980576079",

  appId: "1:528980576079:web:a9482fa6433916922da73a",

  measurementId: "G-HKW82T01M3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


export {app}