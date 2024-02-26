### Beatles Album Game

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To run

Install:

```bash
npm i
# or
yarn
```

Run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Things to note

- The styling is just layout and mediaqueries with some basic styled components. Please don't judge based on how it looks
- The question filtering etc would be better to be on the back-end
  ```
  export const getCurrentQuestion = (albums: Album[], questionsAnswered: number[]): CurrentQuestion => {
    const questionsWithAnsweredRemoved = albums.filter(album => !questionsAnswered.includes(album.cover_image_id))
    const correctAnswer = getCorrectAnswer(questionsWithAnsweredRemoved)
    const wrongAnswers = getWrongAnswers(albums, correctAnswer.cover_image_id)
    return {
      correctAnswer: correctAnswer,
      wrongAnswers: wrongAnswers
    }
  }

- The file layout is not optimal
- Needs more tests
- Needs some error handling
- There is a console warning about using layout prop with next/image. I used it anyway but in future would use next/future/image
