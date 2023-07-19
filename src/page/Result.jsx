import React from "react";
import { styled } from "styled-components";
import Apple from "../assets/apple.svg";
import { useNavigate } from "react-router-dom";
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

const RetryBtn = styled.button`
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
const Img = styled.img`
  background-color: #637ac0;
  width: 30%;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const ResultTxt = styled.p`
  background-color: rgba(141, 160, 218, 0.76);
  font-size: 2.5rem;
  padding: 1rem;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
function Result() {
  const navigate = useNavigate();
  function goMain() {
    navigate("/");
  }
  return (
    <Container>
      <Title>나는야 멋쟁이 사과</Title>
      <RetryBtn onClick={goMain}>&#62; 다시하기</RetryBtn>
      <Img src={Apple} />
      <ResultTxt>
        사과는 단 맛과 신 맛의 균형이 잘 맞으며, ISTJ의 신중한 성향과 함께
        안정성과 신뢰성을 상징할 수 있습니다.
      </ResultTxt>
    </Container>
  );
}

export default Result;
