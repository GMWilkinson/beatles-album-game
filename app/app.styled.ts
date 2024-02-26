import styled from 'styled-components'

export const Page = styled.main`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  width: 100vw;
`

export const QuestionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  padding: 16px;
  font-size: 20px;
  border-radius: 8px;
  min-width: 100%;
  background-color: #993399;
  color: papayawhip;
  margin-bottom: 24px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  padding-left: 16px;
  justify-content: center;
  @media (max-width: 1024px) {
    padding-left: unset;
    justify-content: space-around;
  }
`

export const Box = styled.div`
  width: 100%;
  padding: 16px 0;
`

export const Heading = styled.h1`
  font-size: 2rem;
  text-align: center;
`

export const Text = styled.p`
  font-size: 20px;
`

export const Input = styled.input`
  width: 50%;
  border-radius: 4px;
  height: 30px;
  padding: 8px;
  font-size: 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
`