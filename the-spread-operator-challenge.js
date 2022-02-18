/*
You will use the spread operator to copy an array which is stored in an object 
which itself is stored in an array.
You will create a single line arrow function (has no return statement), 
which should copy an array passed in and add the value passed to it, then return the array.

*/

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects]

const update = (item, val) => [...item, val];
/*  another option to solve:
    const update = (item, val) => (item.push(val), item);
 */

let updatedSubjects = update(subjects, "Electronics");


console.log(updatedSubjects)
console.log(students[0])
