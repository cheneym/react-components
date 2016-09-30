class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.grocery}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery =>
      <GroceryListItem grocery={grocery} />
    )}
  </ul>
);
ReactDOM.render(<GroceryList groceries={['Apples', 'and', 'Oranges']}/>, document.getElementById("app"));
