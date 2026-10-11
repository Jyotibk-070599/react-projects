
// let h1 = React.createElement('h1', {}, 'Hello world from reactJS')
// let root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(h1);

// If We create Nested Elements

// <div id="parent">
//     <div id="child">
//         <h1>Hello, World!</h1>
//     </div>
// </div>

// let parent = React.createElement('div', {id: 'parent'},
//     React.createElement('div', {id: 'child'},
//         React.createElement('h1', {}, "I'm nested element")
//     )
// );

// parent React Javascript element
let parent = React.createElement('div', {id: 'parent'},
    [ React.createElement('div', {id: 'child1'},[ 
        React.createElement('h1', {}, "I'm nested child1-h1"),
        React.createElement('h1', {}, "I'm nested child1-h2")
    ]
    ),
    React.createElement('div', {id: 'child2'},[ 
        React.createElement('h1', {}, "I'm nested child2-h1"),
        React.createElement('h1', {}, "I'm nested child2-h2")
    ]
    
    )    
]);

let root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);