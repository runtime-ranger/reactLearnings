var child1=React.createElement('h4',{},"child1"); //Creating HTML elements using React with CDN links
var child2=React.createElement('h4',{},"child2"); //Not usining JSX
var firstElement=React.createElement('div',{className:"ele"},[child1,child2]);
var root=ReactDOM.createRoot(document.getElementById('root'));
//console.log(element);
root.render(firstElement);
