import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBkmZD4_5qXX-Gsp2wGyWaPXm_REjY-R-4",
    authDomain: "servsecimagedepo.firebaseapp.com",
    projectId: "servsecimagedepo",
    storageBucket: "servsecimagedepo.appspot.com",
    messagingSenderId: "692875148730",
    appId: "1:692875148730:web:9778ea87f0aec67254b183",
    measurementId: "G-677HPGFDKW"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
