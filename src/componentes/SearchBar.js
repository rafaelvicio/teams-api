import React, { Component } from "react";

class SearchBar extends Component {
  pesquisaTermo = e => {
    if (e.keyCode === 13) {
      const termo = e.target.value;
      console.log(termo);
    }
  };

  render() {
    return (
      <div>
        <h1>SarchBar</h1>
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={e => this.pesquisaTermo(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
