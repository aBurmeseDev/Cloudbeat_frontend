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

  submitHandler = e => {
    e.preventDefault();
    this.props.search(this.state.query);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.changeHandler}
            autoComplete="off"
            placeholder="cloudbeat"
            style={{ color: "#ffffff" }}
          />
          <br />
          <button
            onClick={() => {
              this.props.search(this.state.query);
            }}
            className="btn waves-effect waves-light cyan pulse"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
