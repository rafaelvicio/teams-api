import React, { Component } from "react";
import {connect} from "react-redux";

import { buscaTeam } from "./../store/actions/busca-teams";

class SearchBar extends Component {
  pesquisaTermo = e => {
    if (e.keyCode === 13) {
      const termo = e.target.value;
      console.log(termo);
      this.props.buscaTeam(termo);
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

const mapDispatchToProps = (dispatch) => {
  return {
    buscaTeam: (termo) => dispatch(buscaTeam(termo))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);
