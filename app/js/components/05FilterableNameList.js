import React from 'react';

import NameRow from './NameList/NameRow';

export default class FilterableNameList extends React.Component {


  constructor() {
    super();
    // States: ReactDOM will auto-detect state changes in ReactDOM
    this.state = {
      names: [],
      event: 'none',
      filterText: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
  }

  handleClick(event) {
    console.log(event);
    event.preventDefault();
    this.setState({
      event: event.type
    })
  }

  nameFilter(event) {
    event.preventDefault();

    // Not a good way for filtering
    // let new_names = this.state.names.map((name) => {
    //   return `${name.first_name} ${name.last_name}`
    // })
    // this.setState({
    //   names: new_names
    // })
    this.setState({
			filterText: event.target.value
		})
  }




  componentWillMount() {
    // ASYN executing
    this.setState({
      names: this.props.names
    })
    // console.log(this.props.names)
  }

  render() {
    // 'names' is local variable
    let {names} = this.state
    console.log(names)

    let {filterText} = this.state
    if (filterText.length > 1) {

      names = names.filter((name) => {
        let full = `${name.first_name} ${name.last_name}`;
        return full.toLowerCase().includes(filterText.toLowerCase())
      });
    }


    return (
      <div>
        <h1>NameList Component Start Point</h1>
        <h2>Event type for the following form and rows: {this.state.event}</h2>
        <form onChange={this.nameFilter} onFocus={this.handleClick} onBlur={this.handleClick}>
          <input type="text"></input>
          <button type="submit">Submit</button>

        </form>
        {names.map((name) =>
         <h3 key={name.id}><a href="#" onClick={this.handleClick}>{name.first_name} {name.last_name}</a></h3>
         // <NameRow key={name.id} name={name} handleClick={this.handleClick} />
        )}
      </div>
    );
  }



}
