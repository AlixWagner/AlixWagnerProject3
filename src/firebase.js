// Import the functions you need from the SDKs you need
import { initializeApp, cert } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8O3QdIZ3oKHZPaseqJxbPVRCUyzLg_vs",
    authDomain: "bards-r-us.firebaseapp.com",
    projectId: "bards-r-us",
    storageBucket: "bards-r-us.appspot.com",
    messagingSenderId: "223757921275",
    appId: "1:223757921275:web:f3091f2af306704d16f95e",
    measurementId: "G-X7YQCME2C7"
};

// const secondaryServiceAccount = require('./path/to/serviceAccountKey.json');

// All required options are specified by the service account,
// add service-specific configuration like databaseURL as needed.
const secondaryAppConfig = {
    // credential: cert(secondaryServiceAccount),
    apiKey: "AIzaSyBjrweVovxgI1ymH-gaiMnTiJp79d2B6t4",
    authDomain: "randomelfnames.firebaseapp.com",
    databaseURL: "https://randomelfnames-default-rtdb.firebaseio.com",
    projectId: "randomelfnames",
    storageBucket: "randomelfnames.appspot.com",
    messagingSenderId: "736770142923",
    appId: "1:736770142923:web:c5bc85297a1a1b1323214e"
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize another app with a different config
const secondary = initializeApp(secondaryAppConfig, 'secondary');
// Access services, such as the Realtime Database
// const secondaryDatabase = secondary.database();

export { app, secondary };