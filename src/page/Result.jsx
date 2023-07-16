import React from "react";
import { styled } from "styled-components";
import Apple from "../assets/apple.svg";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 96px;
`;

const RetryBtn = styled.button`
  margin-top: 2rem;
`;
const Img = styled.img`
  background-color: #637ac0;
  width: 40%;
`;

const ResultTxt = styled.p`
  background-color: rgba(141, 160, 218, 0.76);
  font-size: 2.5rem;
  padding: 1rem;
  margin: 0 5rem;
`;
function Result() {
  return (
    <Container>
      <Title>나는야 멋쟁이 사과</Title>
      <RetryBtn>&#62; 다시하기</RetryBtn>
      <Img src={Apple} />
      <ResultTxt>
        사과는 단 맛과 신 맛의 균형이 잘 맞으며, ISTJ의 신중한 성향과 함께
        안정성과 신뢰성을 상징할 수 있습니다.
      </ResultTxt>
    </Container>
  );
}

export default Result;
