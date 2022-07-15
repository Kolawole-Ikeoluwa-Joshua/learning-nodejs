// objects, properties & methods

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// object destructuring

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

// Array destructuring

const myHobbies = ['Sports', 'Reading'];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);









// Arrays

const hobbies = ['Sports', 'Cooking'];
//for (let hobby of hobbies) {
//    console.log(hobby);
//}

//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// Arrays & Objects are reference types
hobbies.push('Programming');
console.log(hobbies);

// spread & rest operators

// spread (used to pull elements/prop for array or objects)
const copiedArray = [...hobbies];
console.log(copiedArray);

// rest (used in arg list of a function)
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));








