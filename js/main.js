const target ={a:1,b:2,d:3};
const source ={b:4,c:5};

const newobj = Object.assign(target,source);

console.log(newobj == source);// ei khane true asbe


// object proprty
//enumerable
//writeable
//configareble
//get
//set


// --------------ekhon amra map er bisoi shikbo

const fruits = new Map();
fruits.set ('apple',500);
fruits.set ('bananas',500);//map er kaj er somoi always string er bitore rekhe kaj korte hoi
fruits.set ('oranges',500);
console.log(fruits);


// ------------map er sytext
// const newArray = originalArray.map((item, index) => {
//     return item * 2;
//   });

  
// -------------ekta banalam
  const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]



const students = [
    { name: "Hridoy", mark: 60 },
    { name: "Misu", mark: 85 }
  ];
  const result = students.map(student => {
    return {
      name: student.name,
      passed: student.mark >= 70
    };
  });
  console.log(result);
  // Output: 
  // [ { name: 'Hridoy', passed: false }, { name: 'Misu', passed: true } ]


  let students1 = [
    { name: "Hridoy", age: 21 },
    { name: "Misu", age: 18 },
    { name: "Shimoli", age: 19 }
  ];
  let names = students1.map(function(student1) {
    return student1.name;
  });
  console.log(names);
  let updatedAges = students.map(function(student) {
    return {
      name: student.name,
      age: student.age + 1
    };
  });
  console.log(updatedAges);
  

  //--------------------object Arry + map key    riact----------------
//   const fruits2 = ['Apple', 'Banana', 'Orange'];

//   function App() {
//     return (
//       <ul>
//         {fruits2.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     );
//   }
  
  
  






