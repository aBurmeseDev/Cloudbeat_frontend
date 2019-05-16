import React, { Component } from "react";

class Search extends Component {
  state = {
    query: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.changeHandler}
          autoComplete="off"
        />
        <br />
        <button
          onClick={() => {
            this.props.search(this.state.query);
          }}
          className="btn waves-effect waves-light"
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;
