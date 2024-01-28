import React from 'react'
import { Image, Flex, Mark, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import Addresspana from "../assets/Address-pana.svg"
import logo from "../assets/favCami.svg"

function Login() {
    return (
        <div>

            <Flex justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                p={20}
                style={{ height: '100dvh', width: '100dwh' }}
            >
                <Box style={{width:"350px"}}>
                    <Image
                        radius="md"
                        h={250}
                        w="auto"
                        fit="contain"
                        src={Addresspana}
                    />
                    <Box>
                        <Image
                            my={10}
                            radius="md"
                            h={50}
                            w="auto"
                            fit="contain"
                            src={logo}
                        />
                        <Title order={1}> Sign in </Title>
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
                        <Button color='blue' radius="md" size='md' fullWidth> Sign in  </Button>
                        <Text ta="center" mt={10} c="dimmed">Dont have an account? Sign up</Text>
                        <Text ta="center" mt={10} c="dimmed">Forgot password</Text>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Login