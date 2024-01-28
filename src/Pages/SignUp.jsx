import React from 'react'
import { Image, Flex, Mark, Grid, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import logo from "../assets/favCami.svg"

function SignUp() {
    return (
        <div>
            <Flex
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                p={20}
                style={{ height: '100dvh', width: '100dwh' }}
            >
                <Box style={{width:"350px"}}>
                    <Image
                        my={10}
                        radius="md"
                        h={50}
                        w="auto"
                        fit="contain"
                        src={logo}
                    />
                    <Title order={1}> Sign Up </Title>
                    <TextInput
                        mt={20}
                        label="email"
                        placeholder=""
                    />
                    <PasswordInput
                        my={10}
                        mb={20}
                        label="Password"
                        placeholder=""
                    />
                    <Button color='blue' radius="md" size='md' fullWidth> Create Account  </Button>
                    <Text ta="center" mt={10} c="dimmed">Already have an account? Sign In</Text>
                </Box>



            </Flex>

        </div>
    )
}

export default SignUp