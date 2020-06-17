import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDR8TdW30J7VLq4Q5h7rtFNgnJrK08mDvY',
  authDomain: 'live-camp.firebaseapp.com',
  databaseURL: 'https://live-camp.firebaseio.com',
  projectId: 'live-camp',
  storageBucket: 'live-camp.appspot.com',
  messagingSenderId: '275249312293',
  appId: '1:275249312293:web:4d94148a22ff18fd5bc5cc',
  measurementId: 'G-D26DD6S4YZ',
};

const fireApp = Firebase.initializeApp(firebaseConfig);
export const db = fireApp.database();
