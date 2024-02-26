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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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
