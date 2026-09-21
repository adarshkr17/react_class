// function App() {
//   return (
//     <div>
//       <h1>Hello Adarsh 🚀</h1>
//       <h2>Welcome to React</h2>
//       <p>This is my first React application.</p>
//     </div>
//   );
// }

// export default App;




// function App() {
//   const name="Rahul";
//   const course="Btech";
//   const sem =1;
//   return (
//     <div>
//     <h1>My intro </h1>
//     <h2>{name}</h2>
//     <p>course:{course}</p>
//     <p>sem:{sem}</p>
  
//     </div>
//     );
//   }

// export default App;





// function App() {
//   const name = "rahul";
//   const sem = 4;
//   const dep = "btech";
//   return (
//     <>
//     <div>
//     <h1>intro</h1>
//     <h2>{name}</h2>
//     <p>sem:{sem}</p>
//     </div>
//     <div>
//       <h2>Lovely professional university</h2>
//     </div>
//     </>
//   );
// }

// export default App;





// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>Simple Calculator</h1>

//       <h2>{count}</h2>

//       <button onClick={increase}>+</button>

//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;








// function App() {
//   const add = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);

//     document.getElementById("result").innerText = num1 + num2;
//   };
//   const subtract = () => {
//     const num1 = Number(document.getElementById("num1").value);
//     const num2 = Number(document.getElementById("num2").value);

//     document.getElementById("result").innerText = num1 - num2;
//   };
//   return (
//     <div>
//       <h1>Calculator</h1>
//       <input id="num1" type="number" placeholder="First Number" />
//       <br /><br />
//       <input id="num2" type="number" placeholder="Second Number" />
//       <br /><br />
//       <button onClick={add}>Add</button>
//       <button onClick={subtract}>Subtract</button>
//       <h2>
//         Result: <span id="result">0</span>
//       </h2>
//     </div>
//   );
// }
// export default App;





//js -> react -> nodejs -> nexjs -> bakcend -> projeact and dsa -> free time ts and cloud and devops and some other thing.










//✨app.jsx is imported in main.jsx and main.jsx  exported into index.html using root.

//insted of using div tag into parent tag we will be using fragments <> </> .
//the fragment <>...</> acts as a single parent for the two <div> elements without creating an extra HTML element in the browser. It's mainly used to avoid unnecessary <div> tags



//reconcillation ---> its part of reeact ---> what change have been made in ui and what upadte only the neccesary part of dom.
//Reconciliation is React's process of comparing the new Virtual DOM with the previous Virtual DOM, determining the minimal set of changes, and efficiently updating the real DOM through a diffing algorithm.



//The Diffing Algorithm is React's technique for comparing old and new Virtual DOM trees to find the minimum number of updates needed for the real DOM.

//React Fiber is React's reconciliation engine that breaks rendering work into smaller units, enabling scheduling, prioritization, interruption, and concurrent rendering.














// function Greeting() {
//   const hour = new Date().getHours();

//   return (
//     <h1>
//       {hour < 12 ? "Good Morning" : "Good Evening"}
//     </h1>
//   );
// }

// export default Greeting;



// function Greeting() {
//   const now = new Date();
//   const hour = now.getHours();

//   return (
//     <div>
//       <h1>{hour < 12 ? "Good Morning" : "Good Evening"}</h1>
//       <p>Current Time: {now.toLocaleTimeString()}</p>
//     </div>
//   );
// }

// export default Greeting;



// function Greeting(){
//   const hour = new Date().getHours();
  
//   return (
//     <h1>
//       {hour < 12 ? "good mornign" : "good evening"}
//     </h1>
//   );
  
// }

// export default Greeting ;



// function greet(){
//   const hour = new Date().getHours();
//   return (
//     <h1>
//       {hour<12 ? "gm" : "ge"}
//     </h1>
//   );
// }

// export default greet;






//==============================================================================



// import StudentCard from  "./componets/studentCard";
// function App(){
//   return(
//     <div>
//       <h1>Student Dashboard</h1>
//       <StudentCard
//         name="Rahul"
//         course="cse"
//         roll no : "101"/>
//         <StudentCard
//         name="ahul"
//         course="cpse"
//         roll no : "102"/>
//         <StudentCard
//         name="hul"
//         course="copse"
//         roll no : "103"/>
//     </div>
//   )
// }
// export default App;



//conditioinal renedreing strategies in react are:
//1. if else
//2. ternary operator
//3. and operator

// import StudentCard from "./components/StudentCard";

// function App() {
//   return (
//     <div>
//       <h1>Student Dashboard</h1>

//       <StudentCard
//         name="Rahul"
//         course="CSE"
//         rollno="101"
//         isActive={true}
//       />

//       <StudentCard
//         name="Aman"
//         course="ECE"
//         rollno="102"
//         isActive={false}
//       />

//       <StudentCard
//         name="Priya"
//         course="IT"
//         rollno="103"
//         isActive={true}
//       />
//     </div>
//   );
// }

// export default App;





// function StudentCard({ name, course, rollno, isActive }) {
//   let status;

//   if (isActive) {
//     status = "Active";
//   } else {
//     status = "Inactive";
//   }

//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Course: {course}</p>
//       <p>Roll No: {rollno}</p>
//       <p>Status: {status}</p>
//     </div>
//   );
// }

// export default App;


// import {usestate} from "react";
// import StudentList from "./components/StudentList";
// import StudentDetails from "./components/StudentDetails";

// function App() {
//   const students=[
//     {
//       id:1,
//       name:"Rahul",
//       course:"CSE",
//       rollNo:101,
//     }

//     {
//       id:2,
//       name:"Priya",
//       course:"CSE",
//       rollNo:102,
//     }

//      {
//       id:3,
//       name:"ram",
//       course:"CSE",
//       rollNo:103,
//     }
//   ];
//   const [selectedStudent, setSelectedStudent]= useState(null);
//   return{
//     <div>
//     <h1>Studnet Dashboard</h1>
//     <StudentList
//     student={students}
//     onSelectStudnent={setSelectedStudent}

    
    
//     </div>
//   }
// }




// import { useState } from "react";
// import StudentList from "./components/StudentList";
// import StudentDetails from "./components/StudentDetails";

// function App() {
//   const students = [
//     {
//       id: 1,
//       name: "Rahul",
//       course: "CSE",
//       rollNo: 101,
//     },
//     {
//       id: 2,
//       name: "Priya",
//       course: "CSE",
//       rollNo: 102,
//     },
//     {
//       id: 3,
//       name: "Ram",
//       course: "CSE",
//       rollNo: 103,
//     },
//   ];

//   const [selectedStudent, setSelectedStudent] = useState(null);

//   return (
//     <div>
//   <div className="bg-purple-500 py-6 mb-8 rounded-xl">
//   <h1 className="text-white text-5xl font-bold text-center">
//     Student Dashboard
//   </h1>
// </div>

//       <StudentList
//         students={students}
//         onSelectStudent={setSelectedStudent}
//       />

//       <StudentDetails student={selectedStudent} />
//     </div>
//   );
// }

// export default App;




// import Card from "./components/Card";

// function App() {
//   const products = [
//     {
//       id: 1,
//       title: "iPhone 17",
//       image:
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
//       price: 89999,
//     },
//     {
//       id: 2,
//       title: "MacBook Air",
//       image:
//         "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
//       price: 109999,
//     },
//     {
//       id: 3,
//       title: "AirPods Pro",
//       image:
//         "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
//       price: 24999,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-4xl font-bold text-center mb-10">
//         Products
//       </h1>

//       <div className="flex flex-wrap justify-center gap-8">
//         {products.map((product) => (
//           <Card
//             key={product.id}
//             title={product.title}
//             image={product.image}
//             price={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import Card from "./components/Card";

function App() {
  const products = [
    {
      id: 1,
      title: "iPhone 17",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      price: 89999,
    },
    {
      id: 2,
      title: "MacBook Air",
      image:
        "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      price: 109999,
    },
    {
      id: 3,
      title: "AirPods Pro",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
      price: 24999,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Products
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
