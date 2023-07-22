import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import ResultList from "../data/ResultList";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
  margin: 0 2rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 5rem;
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const Comment = styled.h2`
  color: #cdcdcd;
  font-size: 2.5rem;
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const RetryBtn = styled.button`
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const Img = styled.img`
  background-color: #637ac0;
  width: 25%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const ResultTxt = styled.p`
  background-color: rgba(141, 160, 218, 0.76);
  font-size: 2rem;
  padding: 1rem;
  word-break: keep-all;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
function Result() {
  const [preResult, setPreResult] = useState(15);
  const navigate = useNavigate();
  function goMain() {
    navigate("/");
  }

  function analyze() {}

  const currentResult = ResultList[preResult];
  return (
    <Container>
      <Title>{currentResult.title}</Title>
      <Comment>" {currentResult.comment} "</Comment>
      <RetryBtn onClick={goMain}>&#62; 다시하기</RetryBtn>
      <Img src={currentResult.img} />
      <ResultTxt>{currentResult.resultTxt}</ResultTxt>
    </Container>
  );
}

export default Result;
