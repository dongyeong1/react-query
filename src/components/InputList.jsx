import React, { useEffect } from "react";

const InputList = React.memo(({ array, useCallbackClick }) => {
  console.log("rende");
  return (
    <div>
      <h2>List</h2>
      <button onClick={useCallbackClick}>렌더?</button>
      {array?.map((v, i) => {
        return <div>{v}</div>;
      })}
    </div>
  );
});

export default InputList;
