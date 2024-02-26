import { Button, Heading, Box } from "../app.styled"

interface WrongAnswerProps {
  nextQuestion: () => void
}

const WrongAnswer = ({nextQuestion}: WrongAnswerProps) => {
  return (
    <Box>
      <Box>
        <Heading>Bad luck, have another try</Heading>
      </Box>
      <Button onClick={nextQuestion}>Try again</Button>
    </Box>
  )
}

export default WrongAnswer