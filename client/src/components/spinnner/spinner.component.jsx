import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "55vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="default" />
    </div>
  );
};

export default Spinner;
