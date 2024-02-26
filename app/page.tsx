'use client'
import { useState, useEffect, ChangeEvent } from "react"

import Question from "./components/Question"
import CorrectAnswer from "./components/CorrectAnswer"
import WrongAnswer from "./components/WrongAnswer"
import { getQuestions } from "./api/getQuestions"
import { CurrentQuestion, Album, FormValues } from "./app.interface"
import { getCurrentQuestion } from "./utils/getCurrentQuestion"
import { Box, Page, Heading } from "./app.styled"
import SignIn from "./components/SignIn"

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [allAlbums, setAllAlbums] = useState<Album[] | null>(null)
  const [question, setQuestion] = useState<CurrentQuestion | null>(null)
  const [guess, setGuess] = useState<'correct' | 'wrong' | 'unset'>('unset')
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])
  const [gameOver, setGameOver] = useState<boolean>(false)
  const [user, setUser] = useState<string | null>(null)
  const [formValues, setFormValues] = useState<FormValues>({
    userName: '',
    email: ''
  })

  useEffect(() => {
    (async () => {
      const albums = await getQuestions()
      // This should be for some error handling
      if (albums == null || typeof albums === 'string') {
        return
      }
      setAllAlbums(albums)
    })()
  }, [])

  useEffect(() => {
    if (answeredQuestions.length === allAlbums?.length) {
      setGuess('unset')
      setGameOver(true)
      setAnsweredQuestions([])
      setQuestion(null)
    }
  }, [answeredQuestions])


  const nextQuestion = () => {
    setGuess('unset')
    setLoading(true)

    const currentQuestion = getCurrentQuestion(allAlbums!, answeredQuestions)
    setLoading(false)
    setQuestion(currentQuestion)
  }

  const startGame = () => {
    nextQuestion()
  }

  const handleGuess = (guessId: number) => {
    if (guessId === question?.correctAnswer.cover_image_id) {
      setGuess('correct')
      setAnsweredQuestions([...answeredQuestions, question?.correctAnswer.cover_image_id])
      return
    }
    setGuess('wrong')
  }

  const handleFormChange = (name: string, event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [name]: event.target.value })
  }

  const handleFormSubmit = () => {
    setUser(formValues.userName)
    startGame()
  }

  return (
    <Page>
      {!question ? (
        <Box>
          <Heading>Beatles Album Game</Heading>
        </Box>
      ) : null}

      {!user ? (
        <SignIn 
          formValues={formValues} 
          handleFormChange={handleFormChange} 
          handleFormSubmit={handleFormSubmit} 
        />
      ) : (
      <Box>
        {loading ? (
          <h1>...Loading</h1>
        ) : null}

        {question && guess === 'unset' ? (
          <Question question={question} handleGuess={handleGuess} />
        ) : null}

        {guess === 'correct' && question != null ? (
          <CorrectAnswer correctAnswer={question.correctAnswer} nextQuestion={nextQuestion} />
        ) : null}

        {guess === 'wrong' ? (
          <WrongAnswer nextQuestion={nextQuestion} />
        ) : null}

        {gameOver? (
          <Heading>Congratulations {user} You have won the game!</Heading>
        ) : null}
      </Box>
      )}
    </Page>
  )
}
