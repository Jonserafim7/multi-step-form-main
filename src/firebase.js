// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbyYoQLd8aKS1G2Mp-pF7-vRhT1HQBZYo",
  authDomain: "multistepform-63689.firebaseapp.com",
  projectId: "multistepform-63689",
  storageBucket: "multistepform-63689.appspot.com",
  messagingSenderId: "484901339670",
  appId: "1:484901339670:web:ef20f4263b4c8098b3ab37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const userPlansCollection = collection(db, "userPlans");

/* 

    The provided code is a configuration and initialization script for Firebase in a JavaScript application, 
    specifically using Firebase's Firestore database.

    Firstly, it imports necessary functions from Firebase SDKs. 
    The initializeApp function from firebase/app is used to initialize a Firebase application, 
    and the getFirestore and collection functions from firebase/firestore are used to interact with Firestore, 
    Firebase's NoSQL database.

    Next, a firebaseConfig object is defined. This object contains the configuration details for the Firebase application. 
    These details include the apiKey, authDomain, projectId, storageBucket, messagingSenderId, and appId. 
    These values are specific to the Firebase project and are used to connect the application to the correct Firebase project.

    The initializeApp function is then called with the firebaseConfig object as an argument. 
    This initializes the Firebase application and returns an app instance.

    The getFirestore function is called with the app instance as an argument. 
    This connects to the Firestore database associated with the initialized Firebase application and returns a db instance.

    Finally, the collection function is called with the db instance and the string "userPlans" as arguments. 
    This gets a reference to the userPlans collection in the Firestore database. 
    The db instance and userPlansCollection reference are then exported for use in other parts of the application.

    In summary, this script sets up a connection to a Firebase project and its Firestore database, 
    and provides a reference to the userPlans collection in the database.

*/