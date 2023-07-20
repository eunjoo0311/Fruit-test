import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import choiceList from "../data/ChoiceList";

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
  const [present, setPresent] = useState(0); // 인덱스를 0으로 시작

  const navigate = useNavigate();

  function goNextQuestion() {
    if (present + 1 < choiceList.length) {
      setPresent(present + 1);
    } else {
      navigate("/result");
    }
  }

  const currentQuestion = choiceList[present];

  return (
    <Container>
      <Progressbar>
        <Progress />
      </Progressbar>
      <Question>{currentQuestion.question}</Question>
      <BtnList>
        <button onClick={goNextQuestion}>{currentQuestion.firstAnswer}</button>
        <button onClick={goNextQuestion}>{currentQuestion.secondAnswer}</button>
      </BtnList>
    </Container>
  );
}

export default Choice;
