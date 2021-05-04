import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const PopContainer = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  z-index: 1000;
  position: absolute;
  scale: 2;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
  }
`;

const PopComponent = (props) => {
  const ref = useRef(null);

  //
  return (
    <>
      <PopContainer ref={ref}>
        <img src={props.image}></img>
      </PopContainer>{" "}
    </>
  );
};

export default PopComponent;
