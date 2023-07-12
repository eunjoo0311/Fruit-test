import React from "react";
import styled from "styled-components";
import blue from "../assets/blueberry_circle.svg";
import lemon from "../assets/lemon_circle.svg";
import melon from "../assets/melon_circle.svg";
import straw from "../assets/strawberry_circle.svg";
const Container = styled.div`
  position: relative;
`;

const Title = styled.h1`
  margin: 216px auto auto 106px;
  color: #fff;
  font-size: 60px;
  font-weight: 700;
`;

const StartBtn = styled.button`
  margin: 51px auto auto 106px;
`;

const Img = styled.img`
  position: absolute;
  ${({ position }) =>
    position &&
    `left: ${position.left}px; top: ${position.top}px; right: ${position.right}px;`}

  @media (max-width: 1434px) {
    ${({ position }) =>
      position &&
      position.right &&
      `
      content: "";
      display: none;
    `}
  }

  @media (max-width: 912px) {
    ${({ position }) =>
      position &&
      `
      left: ${position.left}px;
      top: ${position.top + 200}px;
      right: ${position.right}px;
    `}
  }
  @media (max-width: 768px) {
    ${({ position }) =>
      position &&
      `
      left: ${position.left}px;
      top: ${position.top + 400}px;
      right: ${position.right}px;
    `}
  }
`;

function Main() {
  return (
    <Container>
      <Title>과일로 보는 내 성격은?</Title>
      <StartBtn>&#62; 시작</StartBtn>
      <Img src={blue} position={{ left: 63, top: 223 }} />
      <Img src={lemon} position={{ left: 495, top: 121 }} />
      <Img src={melon} position={{ right: 258, top: 345 }} />
      <Img src={straw} position={{ right: 45, top: -10 }} />
    </Container>
  );
}
export default Main;
