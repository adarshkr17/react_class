

//✨app.jsx is imported in main.jsx and main.jsx  exported into index.html using id root. we have 1 index.html as it is SPA(single page application).



# fragments
//insted of using div tag into parent tag we will be using fragments <> </> .
//the fragment <>...</> acts as a single parent for the two <div> elements without creating an extra HTML element in the browser. It's mainly used to avoid unnecessary <div> tags



//reconcillation ---> its part of reeact ---> what change have been made in ui and what upadte only the neccesary part of dom.
//Reconciliation is React's process of comparing the new Virtual DOM with the previous Virtual DOM, determining the minimal set of changes, and efficiently updating the real DOM through a diffing algorithm.



//The Diffing Algorithm is React's technique for comparing old and new Virtual DOM trees to find the minimum number of updates needed for the real DOM.

//React Fiber is React's reconciliation engine that breaks rendering work into smaller units, enabling scheduling, prioritization, interruption, and concurrent rendering.




// ====================================================================================








# lifting the state up in component heirechy:-

when two components neeed to share the same changing date, move that state up to their nearest common parent.
ex: like studentList.jx and studenDetails.jsx are the 2 components and in cant change the date in this two at same time so we take the nearest parent date which is App.jx lift this up.



// ====================================================================================


# components


1. What is a Component?

Viva Answer:
A component is a reusable and independent piece of UI in React. It is a JavaScript function that returns JSX and helps build the user interface in smaller parts.

One-line Answer:

A component is a reusable building block of a React application.

2. Types of Components

Viva Answer:
There are two types of components in React:

Functional Component (most commonly used)
Class Component (older approach)

Example:

Functional Component:

function Welcome() {
  return <h1>Hello</h1>;
}

Class Component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

One-line Answer:

React has two types of components: Functional Components and Class Components.

3. Use of Components

Viva Answer:
Components are used to divide the application into smaller, reusable parts. They help organize code, improve readability, and make development easier.

One-line Answer:

Components are used to create reusable and manageable UI elements.

4. Why Do We Use Components?

Viva Answer:
We use components to avoid code duplication, improve code reusability, make applications easier to maintain, and enable better team collaboration.

One-line Answer:

Components are used to make code reusable, maintainable, and scalable.

Interview/Viva Short Answer

Q: What is a component?
A: A component is a reusable piece of UI in React.

Q: What are the types of components?
A: Functional Components and Class Components.

Q: Why are components used?
A: To reuse code and make applications easier to manage.

Q: What is the advantage of components?
A: Reusability, maintainability, and better code organization.



// ====================================================================================


# DOM (Viva Answer)

What is DOM?
DOM (Document Object Model) is a tree-like representation of an HTML page. It allows JavaScript to access and update webpage content.

Example:

<html>
  <body>
    <h1>Hello</h1>
  </body>
</html>

DOM Tree:

Document
 └── html
      └── body
           └── h1


# What is Virtual DOM?

Viva Answer:
Virtual DOM is a lightweight copy of the Real DOM maintained by React. React first updates the Virtual DOM, compares it with the previous version, and then updates only the changed parts in the Real DOM.

One-line Answer:

Virtual DOM is a virtual copy of the Real DOM used by React to improve performance.

Old DOM vs New DOM

When state changes:

React creates a new Virtual DOM.
Compares it with the old Virtual DOM.
Finds the differences (Diffing).
Updates only the changed elements in the Real DOM.

This process is called Reconciliation.

Old Virtual DOM
       ↓
   Compare
       ↓
New Virtual DOM
       ↓
Find Changes
       ↓
Update Real DOM



# difference
Real DOM        vs            Virtual DOM
Real DOM	                    Virtual DOM. 
Actual webpage structure	    Virtual copy of Real DOM
Slow updates	                Faster updates
Updates entire page section	  Updates only changed parts
Browser handles updates	      React handles updates




npm install tailwindcss @tailwindcss/vite -----> to install talwindcss


px --> horizontal padding
py --> vertical padding
m --> margin



// ====================================================================================



# learning card using prop and using some basic talwind css


App.jsx is the Parent Component.

Card.jsx is the Child Component.

Data travels from Parent → Child using Props.



# Q: Why do we import Card?

Ans: To use the Card component inside App.jsx.


# Q: What is App component?

Ans: App component is the root component of the React application.

React starts rendering from app components.

# Q: Why are we storing data in an array?

Ans: To manage multiple products efficiently and render them dynamically.

# return ( 
React components return jsx ---> jsx looks like HTML but is actually javascript.

# jsx
jsx stands for JavaScript XML. it allows us to write HTML-like code inside Javascript.


# Q: Why className instead of class?

Ans: Because class is a reserved keyword in JavaScript. React uses className.



# Q: What is Flexbox?

Ans: Flexbox is a CSS layout system used to align items horizontally and vertically.


# Q: Why use map()?

Ans: map() is used to render multiple components dynamically from an array.








