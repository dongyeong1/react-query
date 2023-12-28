import React, { useCallback, useEffect, useState } from "react";
import InputList from "./InputList";
import styled from "styled-components";
import useIsMobie from "../hooks/useIsMobie";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const Wrap = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  ${({ isMobile }) =>
    isMobile === true &&
    `

        grid-template-columns:1fr 1fr;
`}
`;

const Input = () => {
  console.log("render");
  const [state, setState] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    console.log(state);
    console.log(array);
  }, [state, array]);

  const useCallbackClick = useCallback(() => {
    setArray([]);
  }, [array]);

  const pushArray = () => {
    setArray([...array, state]);
  };

  const isMobile = useIsMobie();

  useEffect(() => {
    console.log("mobile", isMobile);
  }, [isMobile]);

  return (
    <div>
      <input onChange={(e) => setState(e.target.value)}></input>
      <button onClick={pushArray}>입력</button>
      <InputList useCallbackClick={useCallbackClick} array={array}></InputList>
      <Wrap isMobile={isMobile}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Wrap>
    </div>
  );
};

export default Input;
