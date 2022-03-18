'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);


const obj = {
    a:5,
    b:1,
};

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x:7,
        y:4
    }
};

const newNumber = copy(numbers);

newNumber.a = 10;
newNumber.c.x = 10;

console.log(newNumber);

const add = {
    d: 17,
    e: 20,
};

let sopy = Object.assign({}, add);

console.log(sopy);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray.unshift('a');
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo','rutube','twitch'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = ["имя", "фамилия", "подпись"];
log(...num);

const array = ['a', 'b', 'c'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};