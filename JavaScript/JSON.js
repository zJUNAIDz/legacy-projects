const arr = ["John", "Peter", "Sally", "Jane"];
let myJSON = JSON.stringify(arr);
console.log(myJSON);
myJSON = JSON.parse(myJSON);
console.log(myJSON);

localStorage.setItem('testJSON', myJSON);
