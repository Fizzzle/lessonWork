'use strict';

const options = {
    name: 'test',
    width: 1024,
    Height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function(){
        console.log('test');
    }    
};

const {border, bg} = options.colors;


options.makeTest();

console.log(Object.keys(options).length);

// console.log(options['colors']['bg']);

// let counter = 0;
// for(let key in options){
//     console.log(`свойство ${key} имеет значение options`);
//     counter++;
// }
// console.log(counter);

// for(let key in options) {
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }    
// };

