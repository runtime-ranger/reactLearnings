var child1=React.createElement('h4',{},"child1");
var child2=React.createElement('h4',{},"child2");
var element=React.createElement('div',{className:"ele"},[child1,child2]);
var root=ReactDOM.createRoot(document.getElementById('root'));
console.log(element);
root.render(element);
