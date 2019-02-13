import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/spinner";
import Gifs from "../trending/Gifs";

class Trending extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { gifList, heading } = value;
          return gifList === undefined || gifList.length === 0 ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <div className="containerGifs">
                <h3 className="containerGifs_header">{heading}</h3>
                <div className="containerGifs_gifs">
                  {gifList.map(item => (
                    <Gifs key={item.id} gif={item} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Trending;
