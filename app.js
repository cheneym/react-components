var GroceryList = (cart) => (
  <div>
    <GroceryListItem grocery = {cart.groceries[0]} />
    <GroceryListItem grocery = {cart.groceries[1]} />
    <GroceryListItem grocery = {cart.groceries[2]} />
    <GroceryListItem grocery = {cart.groceries[3]} />
  </div>
)

// var Cucumbers = () => (
//   <div> yolo </div>
// )

// var Kale = () => (
//   <div> pce </div>
// )

var GroceryListItem = (item) => (
  <div> {item.grocery} </div>
)

var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList groceries={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);
ReactDOM.render(<GroceryList groceries={['Apples', 'and', 'Oranges']}/>, document.getElementById("app"));

