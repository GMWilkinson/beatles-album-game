import Image from "next/image"

import { CurrentQuestion, Album } from "../app.interface"
import { useState, useEffect } from "react"
import { Button, QuestionContent, Column, Box } from "../app.styled"

interface QuestionProps {
  question: CurrentQuestion
  handleGuess: (guessId: number) => void
}

const Question = ({question, handleGuess}: QuestionProps) => {
  const [randomisedAnswers, setRandomisedAnswers] = useState<Album[] | null>(null)
  const {correctAnswer, wrongAnswers} = question

  useEffect(() => {
    // Randomise order of answers
    const randomNumber = Math.floor(Math.random() * 2)
    const answers = [...wrongAnswers]
    answers.splice(randomNumber, 0, correctAnswer)
    setRandomisedAnswers(answers)
  }, [question])

  return (
    <QuestionContent>
      <Box>
        <Image 
          src={`https://frontend-interview.evidentinsights.com${correctAnswer.cover_image_path}`}
          width={100}
          // @ts-ignore
          height={100}
          layout="responsive"
          alt="album cover" 
        />
      </Box>
      <Column>
        {randomisedAnswers?.map(answer => {
          return (
            <Button 
              key={answer.cover_image_id} 
              onClick={() => handleGuess(answer.cover_image_id)}
            >
                {answer.name}
            </Button>
          )
        })}
      </Column>
    </QuestionContent>
  )
}

export default Question