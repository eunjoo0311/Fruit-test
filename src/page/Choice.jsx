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
  const [resultType, setResultType] = useState("");
  const [score, setScore] = useState({ EI: 0, SN: 0, TF: 0, PJ: 0 });

  const navigate = useNavigate();

  function goNextQuestion(selectedAnswerType) {
    const currentQuestion = choiceList[present];
    if (selectedAnswerType === "first") {
      setScore((prevScore) => ({
        ...prevScore,
        [currentQuestion.type]: prevScore[currentQuestion.type] + 1,
      }));
    }

    if (present + 1 < choiceList.length) {
      setPresent(present + 1);
      setPreProgress(preProgress + 1);
    } else {
      let resultType = "";

      if (score.EI >= 2) {
        resultType += "e";
      } else {
        resultType += "i";
      }

      if (score.SN >= 2) {
        resultType += "s";
      } else {
        resultType += "n";
      }

      if (score.TF >= 2) {
        resultType += "f";
      } else {
        resultType += "t";
      }

      if (score.PJ >= 2) {
        resultType += "j";
      } else {
        resultType += "p";
      }

      setResultType(resultType);
      navigate("/result", { state: { resultType } });
      console.log(resultType);
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
        <button onClick={() => goNextQuestion("first")}>
          {currentQuestion.firstAnswer}
        </button>
        <button onClick={() => goNextQuestion("second")}>
          {currentQuestion.secondAnswer}
        </button>
      </BtnList>
    </Container>
  );
}

export default Choice;
