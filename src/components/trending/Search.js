import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

class Search extends Component {
  state = {
    gifTitle: ""
  };

  findGif = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `
      http://api.giphy.com/v1/gifs/search?&api_key=${API_KEY}&q=${
          this.state.gifTitle
        }&limit=100
      `
      )
      .then(res => {
        dispatch({
          type: "SEARCH_GIFS",
          payload: res.data.data
        });

        this.setState({ gifTitle: "" });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="search">
              <form onSubmit={this.findGif.bind(this, dispatch)}>
                <div className="search_group">
                  <div className="search_groupForm">
                    <input
                      type="text"
                      className="search_groupFormInput"
                      placeholder="Search For Any GIF On GIPHY"
                      name="gifTitle"
                      value={this.state.gifTitle}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="search_groupButton" type="submit">
                    <i className="fas fa-search fa-2x" />
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
