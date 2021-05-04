import React from "react";
import styled from "styled-components";
import Cursor from "./Cursor";
import image1 from "../assets/meenoi3.jpg";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: #f5f5f5;
  overflow: hidden;
  display: flex;

  div {
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;

    margin-top: 300px;
    margin-left: 400px;
  }

  img {
    width: auto;
  }
`;

const Main = () => {
  return (
    <>
      <Cursor></Cursor>
      <Container>
        <div>
          <img src={image1} alt=''></img>
        </div>
      </Container>
      <Container></Container>
    </>
  );
};

export default Main;
