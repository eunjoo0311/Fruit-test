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
  width: ${(props) => (100 / 12) * (props.progress + 1)}%;
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
  const [present, setPresent] = useState(0);
  const [preProgress, setPreProgress] = useState(0);
  const [scores, setScores] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  const navigate = useNavigate();

  function goNextQuestion(type) {
    if (present + 1 < choiceList.length) {
      // Update the score based on the selected type (E or I)
      setScores((prevScores) => ({
        ...prevScores,
        [type]: prevScores[type] + 1,
      }));

      setPresent(present + 1);
      setPreProgress(preProgress + 1);
    } else {
      // Pass the scores to the Result component via react-router's navigate state
      navigate("/result", { state: scores });
    }
  }

  const currentQuestion = choiceList[present];

  return (
    <Container>
      <Progressbar>
        <Progress progress={preProgress} />
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
