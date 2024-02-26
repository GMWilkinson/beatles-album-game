import { Box, Button, Text, Input } from "../app.styled"
import { FormValues } from "../app.interface"
import { ChangeEvent } from "react"

interface SignInFormProps {
  formValues: FormValues
  handleFormChange: (name: string, event: ChangeEvent<HTMLInputElement>) => void
  handleFormSubmit: () => void
}

const SignIn = ({formValues, handleFormChange, handleFormSubmit}: SignInFormProps) => {
  return (
    <>
      <Box>
        <Text>Welcome! Please enter your name and email address</Text>
        <Box>
          <Input 
            type="text" 
            name="name" 
            value={formValues.userName} 
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleFormChange('userName', event)} 
            placeholder="Enter name"
          />
        </Box>
        <Box>
          <Input 
            type="text" 
            name="email" 
            value={formValues.email} 
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleFormChange('email', event)} 
            placeholder="Enter email"
          />
        </Box>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </Box>
    </>
  )
}

export default SignIn