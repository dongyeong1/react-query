import React, { useRef, useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const Wrapper = styled.div`
  .dragover {
    opacity: 0.5;
  }
`;

const Dragdrop = () => {
  const [list, setList] = useState([]);
  const wrapperRef = useRef(null);

  const onDragEnter = () => {
    wrapperRef.current.classList.add("dragover");
  };
  const onDragLeave = () => {
    wrapperRef.current.classList.remove("dragover");
  };
  const onDrag = () => {
    wrapperRef.current.classList.remove("dragover");
  };
  const inputChange = (e) => {
    wrapperRef.current.classList.remove("dragover");

    setList([...list, ...e.target.files]);
  };

  return (
    <Wrapper>
      <InputWrapper
        ref={wrapperRef}
        onDrag={onDrag}
        onDragLeave={onDragLeave}
        onDragEnter={onDragEnter}
      >
        <Input type="file" onChange={inputChange}></Input>
      </InputWrapper>
      <ul>
        {list?.map((v) => (
          <li>{v.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Dragdrop;
