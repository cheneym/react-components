class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemMouseOver() {
    this.setState({
      hover: true
    })
  }

  onListItemMouseOut() {
    this.setState({
      hover: false
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)} onMouseOut={this.onListItemMouseOut.bind(this)} onClick={this.onListItemClick.bind(this)}>
        {this.props.grocery}
      </li>
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