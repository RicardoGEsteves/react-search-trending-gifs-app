import React from "react";
import Loader from "react-loader-spinner";

export default () => {
  return (
    <div style={{ width: "100px", margin: "40px auto", display: "block" }}>
      <Loader type="Ball-Triangle" color="#00BFFF" height="100" width="100" />
    </div>
  );
};
