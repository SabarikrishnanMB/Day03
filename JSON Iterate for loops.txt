const data = { name: "xxx", age: 15, city: "yyy"};
const arr = [1,2,3,4,5,6,7,8];

//for loop

for (let i=0;i<=arr.length;i++){
  console.log(i);
}

// for in loop
// This loop we can use Object and Array 
// In object it will give Key value and in array it return Index value

// for in loop (object)

for (let key in data){
    console.log(key); // name,age,city
    console.log(data[key]); // xxx, 15, yyy
}

for (let index in arr){
    console.log(index); // 0 to 7
    console.log(arr[index]); // 1 to 8
}

// for of loop it will return value of the array not for the object

for (let value of arr){
    console.log(value); // 1 to 8
}

// for each loop 
// This loop is array function it will run in array and return array value

arr.forEach(function (value){
    console.log(value); // 1 to 8
});
