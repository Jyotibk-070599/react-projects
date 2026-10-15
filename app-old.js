import React from "react";
import ReactDOM from "react-dom/client";

// let h1 = React.createElement('h1', {}, 'Hello world from reactJS')
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(h1);

// If We create Nested Elements

// <div id="parent">
//     <div id="child">
//         <h1>Hello, World!</h1>
//     </div>
// </div>

// const parent = React.createElement('div', {id: 'parent'},
//     React.createElement('div', {id: 'child'},
//         React.createElement('h1', {}, "I'm nested element")
//     )
// );

// parent React Javascript element
// Uisng Core React
// let parent = React.createElement('div', {id: 'parent'},
//     [ React.createElement('div', {id: 'child1'},[ 
//         React.createElement('h1', {}, "I'm nested child1-h1"),
//         React.createElement('h1', {}, "I'm nested child1-h2")
//     ]
//     ),
//     React.createElement('div', {id: 'child2'},[ 
//         React.createElement('h1', {}, "I'm nested child2-h1"),
//         React.createElement('h1', {}, "I'm nested child2-h2")
//     ]
    
//     )    
// ]);

// Uising JSX
// const parent = <h1 id="parent" className="head"> Hello, World! from JSX</h1>
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent);

// React Component
// ClassBased Component  --> old Method
// Functional Component  --> New Method

// Functional Component
const HeadingComponent = () => (
    <div>
        <h2>Rendering Functional Component</h2>
        <SubheadingComponent />
    </div>
)

// Component Composition --> Rendering Component inside another Component (Above example)
const SubheadingComponent = () => {
    return <h3>Rendering Subheading Component</h3>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);