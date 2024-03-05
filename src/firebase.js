import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeB-y8OFYkgJry_A9pCj8pPLkycmFW1vg",
    authDomain: "cybersecurity-a84e3.firebaseapp.com",
    projectId: "cybersecurity-a84e3",
    storageBucket: "cybersecurity-a84e3.appspot.com",
    messagingSenderId: "208137616901",
    appId: "1:208137616901:web:9762e3c638270561cc666c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };