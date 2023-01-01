import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
    return (
        <Box w={"80%"} m={"auto"} mt={"95px"}>
            <FormControl>
                <Heading>Login</Heading>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText textAlign={"start"}>We'll never share your email.</FormHelperText>
                <FormLabel>Password</FormLabel>
                <Input type='password' />
                <Button display={"block"} margin={"none"} marginTop={"15px"} colorScheme={"blue"}>Login</Button>
            </FormControl>
        </Box>
    )
}

export default Login