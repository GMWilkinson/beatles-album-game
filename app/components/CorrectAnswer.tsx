import Image from "next/image"

import { Album } from "../app.interface"
import { Button, Heading, Box, QuestionContent, Column } from "../app.styled"


interface CorrectAnswerProps {
  correctAnswer: Album
  nextQuestion: () => void
}

const CorrectAnswer = ({correctAnswer, nextQuestion}: CorrectAnswerProps) => {
  return (
    <QuestionContent>
      <Box>
        <Image 
          src={`https://frontend-interview.evidentinsights.com${correctAnswer.cover_image_path}`}
          width={200}
          // @ts-ignore
          height={200} 
          layout="responsive"
          alt="album cover" 
        />
      </Box>
      <Column>
        <Heading>{correctAnswer.name} was released in {correctAnswer.year_released}.</Heading>
        <Heading>The runtime is {correctAnswer.length} and has {correctAnswer.tracks} tracks.</Heading>
        <div>
          <Button onClick={nextQuestion}>Next question</Button>
        </div>
      </Column>
    </QuestionContent>
  )
}

export default CorrectAnswer