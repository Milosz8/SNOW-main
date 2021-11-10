import React from 'react'
import { FromButton, Icon, Container, FormWrap, FormContent,Form, FormH1, FormLabel,FormInput,Text} from './SignInElements.js'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">SNOW</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' requierd />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' requierd />
                            <FromButton type='submit'>Continue</FromButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
