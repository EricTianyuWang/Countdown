function calculateDogAge (dogAge, rate) {
    console.log("Your doggie is " + dogAge * rate + " years old!");
}
function arrToObj(arr) {
    let sentence = "";
    for(let i = 0; i < arr.length; i++) {
        sentence += arr[i] + " ";
    }
    return {length: arr.length,
            sentence: sentence
    };
}
const puppyAge = 10;
calculateDogAge(puppyAge, 7);
myArr = ["a", "b", "c"];
myObj = {name : "Bob", age : 3};
myObj2 = myObj;
//console.log(myObj2);
//JSON.data.children[0].data.author_fullname
let test = ["This", "is", "an", "sentence"]
//console.log(arrToObj(test))
console.log ( test.map( (str) => {
    return str.length;
}) );
objArr = [{ name: "a", age: 2}, {name: "b", age: 3}]

console.log( [{ name: "a", age: 2}, {name: "b", age: 3}].map( (obj) => {
    return obj.name;
}));

console.log( [{ name: "a", age: 2}, {name: "b", age: 3}].map( (obj) => {
    obj.age = 0; //map can't change the originial array!
    return obj.age;
}))
console.log(objArr)

