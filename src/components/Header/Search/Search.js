import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor()
  {
    super();
    this.state = {
      userInput: ""
    }
  }

  updateUserInput(value)
  {
    this.setState({
      userInput: value
    })
  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" 
          // onChange={(event) => this.updateUserInput(event.target.value)}
          onChange={(event) => this.props.method(event.target.value)}
          />

          <SearchIcon id="Search__icon"
          // onClick={() => this.props.method(this.state.userInput)}
          />
        </div>
        
      </section>
    )
  }
}