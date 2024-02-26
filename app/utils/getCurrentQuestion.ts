import { Album, CurrentQuestion } from "../app.interface"

// I think this logic would be better handled on the back-end

const getWrongAnswers = (albums: Album[], exclude: number): Album[] => {
  const wrongAnswers = albums.map(album => ({ album, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .filter(({album}) => album.cover_image_id !== exclude)
    .map(({ album }) => album)
    .slice(0, 2)
  return wrongAnswers
}

const getCorrectAnswer = (albums: Album[]): Album => {
  const correctAnswer = albums.map(album => ({ album, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)[0].album
  return correctAnswer
}

export const getCurrentQuestion = (albums: Album[], questionsAnswered: number[]): CurrentQuestion => {
  const questionsWithAnsweredRemoved = albums.filter(album => !questionsAnswered.includes(album.cover_image_id))
  const correctAnswer = getCorrectAnswer(questionsWithAnsweredRemoved)
  const wrongAnswers = getWrongAnswers(albums, correctAnswer.cover_image_id)
  return {
    correctAnswer: correctAnswer,
    wrongAnswers: wrongAnswers
  }
}