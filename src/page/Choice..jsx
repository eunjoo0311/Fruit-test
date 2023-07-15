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
  width: 70%;
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
  font-size: 40px;
  color: white;
`;
function Choice() {
  return (
    <Container>
      <Progressbar>
        <Progress />
      </Progressbar>
      <Question>파티에 입장할 때 나의 모습은?</Question>
      <button>내가 주인공인 것 처럼 입장한다.</button>
      <button>조용히 들어간다.</button>
    </Container>
  );
}

export default Choice;
