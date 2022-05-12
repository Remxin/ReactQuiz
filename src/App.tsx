import React, { FC, useState } from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import './App.css';


// styles 
import { Wrapper } from './App.styles';

//types 
import { Difficulty, QuestionState } from './API';
export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}






const TOTAL_QUESTIONS = 10

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState<number>(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(true)

  // console.log(questions)
  // console.log(questions?.[number]?.incorrect_answers, number)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    console.log(newQuestions)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //users answer
      const answer = e.currentTarget.value
      // check if the anser is correct
      const isCorrect = questions[number].correct_answer === answer

      if (isCorrect) {
        setScore(prev => prev + 1)
      }
      //save anser in the aray for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct: isCorrect,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
      {/* <GlobalStyle> */}
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>Start</button>
        ) : null}
        {!gameOver ? (<p className="score">Score: {score}</p>) : null}
        {loading ? (<p>Loading Questions...</p>) : null}
        {!loading && !gameOver ? (<QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer} />) : null}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ?
          (<button className="next" onClick={nextQuestion}>Next question</button>)
          : null}

      </Wrapper>
      {/* </GlobalStyle> */}
    </>
  );
}

export default App;
