//
// Object Destructuring
//



// const person = {
//     name: 'Ray',
//     age: 70,
//     location: {
//         city: 'Brooksville',
//         temp: 60
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age= person.age;

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// console.log(`${firstName} is ${age}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['1299 S Juniper Street', 'Chicago', 'Illinois', '60647'];

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [desc, , medium] = item;

console.log(`A medium ${desc} costs ${medium}.`);