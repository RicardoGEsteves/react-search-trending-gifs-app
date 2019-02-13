import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/spinner";

class Gif extends Component {
  render() {
    const { url } = this.props.location.state;

    return url === undefined || Object.keys(url).length === 0 ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <div className="gifRoute_container">
          <div className="gif_image">
            <img src={url} alt="awesome_gif" />
          </div>
          <Link to="/" className="backButton">
            <button className="backButton_button">Go Back</button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Gif;
