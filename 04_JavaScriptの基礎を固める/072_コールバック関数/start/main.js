// function hello(callback, lastname) {
//     console.log('hello' + callback(lastname));
// }

// const data = {
//     name: '大和田直希',
//     age: 24,
//     fav: 'baseball'
// }

// function getAge() {
//     return data.age;
// }

// function getName() {
//     return 'code mafia';
// }

// function getFullName() {
//     return 'code';
// }

// hello(    function(name) {
//     return 'code' + name;
// }, 'mafia');

function doSomething(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

function mltiply(a, b) {
    return a * b;
}

const plus = (a, b) => a + b;

doSomething(5, 4, plus);