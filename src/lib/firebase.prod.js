import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyCqwuf-ONG_Oq6zEsTjXy9xE_nRAdUV8Zo",
    authDomain: "netflix-2c84c.firebaseapp.com",
    projectId: "netflix-2c84c",
    storageBucket: "netflix-2c84c.appspot.com",
    messagingSenderId: "538598007520",
    appId: "1:538598007520:web:58f7b12109d4d3e398e685"
  };
const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };