import React from "react";
import styled from "styled-components";
import blue from "../assets/blueberry_circle.svg";
import lemon from "../assets/lemon_circle.svg";
import melon from "../assets/melon_circle.svg";
import straw from "../assets/strawberry_circle.svg";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  position: relative;
`;

const Title = styled.h1`
  margin: 216px auto auto 106px;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 100px auto auto 30px;
    word-break: keep-all;
  }
`;

const StartBtn = styled.button`
  margin: 51px auto auto 106px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 30px auto auto 30px;
    word-break: keep-all;
  }
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
      right: ${position.right}px;
    `}
  }

  @media (max-width: 768px) {
    width: 70%;
    ${({ src }) => src !== blue && `display: none;`}
  }
`;

export default function Main() {
  const navigate = useNavigate();
  function goChoice() {
    navigate("/choice");
  }
  return (
    <Container>
      <Title>과일로 보는 내 성격은?</Title>
      <StartBtn onClick={goChoice}>&#62; 시작</StartBtn>
      <Img src={blue} position={{ left: 63, top: 223 }} />
      <Img src={lemon} position={{ left: 495, top: 121 }} />
      <Img src={melon} position={{ right: 258, top: 345 }} />
      <Img src={straw} position={{ right: 45, top: -10 }} />
    </Container>
  );
}
