import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_GIFS":
      return {
        ...state,
        gifList: action.payload,
        heading: "SEARCH RESULTS"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    gifList: [],
    heading: "TOP TRENDING GIFS",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        `
      http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=100
      `
      )
      .then(res => {
        // console.log(res.data.data);
        this.setState({ gifList: res.data.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
