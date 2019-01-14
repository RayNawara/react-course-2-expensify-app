import * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }).catch((e) => {
//     console.log('Read error: ', e);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e) => {
//     console.log('Error reading data ', e);
//   });

// database.ref('expenses').push({
//   description: 'Phone bill',
//   note: '',
//   amount: 8800,
//   createdAt: 0
// });

// database.ref('notes/-LVykBViABwQuLxqfr6r').update({
//   body: 'Eat breakfast'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     apoijasdf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     qweweafd: {
//       title: 'Another note!',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note!',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref()
//   .on('value', (snapshot) => {
//     const person = snapshot.val();
//     console.log(`${person.name} is a ${person.job.title} at ${person.job.company}`);
//   }, (e) => {
//     console.log('Error reading data ', e);
//   });

// const onValueChange = database.ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error reading data ', e);
//   });
  
//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 7000);
  
//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

// Fetch data a single time

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Read error: ', e);
//   });

// Load some data into database

// database.ref().set({
//   name: 'Raymond Nawara',
//   age: 70,
//   stressLevel: 8,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Brooksville',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data saved');
// }).catch((e) => {
//   console.log('This failed. ', e);
// });

// // Use update to update elements

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().update({
//   job: 'Manager',
//   'location/city': 'Tampa'
// });

// database.ref()
//   .update({
//     name: 'Ray',
//     age: 27,
//     job: 'Software developer',
//     isSingle: null
//   })
//   .then(() => {
//     console.log('Update succeeded.');
//   }).catch((e) => {
//     console.log('Update failed: ', e);
//   });

// Use set to remove an element

// database.ref('isSingle')
//   .set(null)
//   .then(() => {
//     console.log('Set remove succeeded.');
//   }).catch((e) => {
//     console.log('Set remove failed: ', e);
//   });

// Use remove to remove an element

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Remove succeeded.');
//   }).catch((e) => {
//     console.log('Remove failed: ', e);
//   });