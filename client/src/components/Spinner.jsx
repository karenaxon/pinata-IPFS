import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="justify-content-center mt-2">
      <Circles color={"gray"} height={40} width={170} />
      <p className="text-center mt-2">{message}</p>
    </div>
  );
};

export default Spinner;
