import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const Progressbar = styled.div`
  width: 80%;
  height: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Progress = styled.div`
  background-color: #4fc672;
  width: 50%;
  height: 100%;
  border-radius: 10px;
`;

const Question = styled.h1`
  font-size: 3rem;
  color: white;
  padding: 0 3rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BtnList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  gap: 5rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
function Choice() {
  return (
    <Container>
      <Progressbar>
        <Progress />
      </Progressbar>
      <Question>파티에 입장할 때 나의 모습은?</Question>
      <BtnList>
        <button>내가 주인공인 것 처럼 입장한다.</button>
        <button>조용히 들어간다.</button>
      </BtnList>
    </Container>
  );
}

export default Choice;
