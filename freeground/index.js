// let btn = document.querySelector("#btn");
//  const colours = [
//   "green",
//   "blue",
//   "yellow",
//   "pink",
//   "brown",
//   "torquise",
//   "red",
//   "grey",
//   "cyan",
// ];
// let i = 0;
// function run() {
//   setInterval(() => {
//     document.body.bgColor = colours[i];
//     i < 8 ? i++ : (i = 0);
//   }, 1 * 1000);
// }
// btn.addEventListener("click", run);

// function filter_list(l) {
//   // Return a new array with the strings filtered out
//   let filteredList = l.filter((value,index,array)=>{
//     return typeof value === 'number';
//   })
//    console.log(filteredList);
// }
// filter_list([1,2,3,"a",undefined,null, "helllloooo",4,5])

function getDivisorsCnt(n) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    let divided = n / i;
    if (divided - Math.floor(divided) === 0) {
      count+=1;
    }
  }
  console.log(count); 
}
getDivisorsCnt(11);
