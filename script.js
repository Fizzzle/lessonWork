'use strict';

// to String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const fontSize = 26 + 'px'
const num = 5;
console.log('https://vk.com/catalog/' + num);


// to Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(+'5');

// 3)
console.log(parseInt('15px', 10));

// to Boolean

// 1)
// 0, '', null, undefined, NaN; - это всё будет false

let switcher = null;
if(switcher){
    console.log('working...')
}

switcher = 1;
if(switcher){
    console.log('working...')
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'1'));