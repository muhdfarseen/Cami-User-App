import React from 'react'
import { Image, Alert, PinInput, NumberInput, Modal, Group, Select, Flex, Mark, Grid, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconInfoCircle } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

function PasswordReset() {
    const [opened, { open, close }] = useDisclosure(false);

    const navigate = useNavigate();

    const handleButtonClick = () => {

        navigate('/Profile');
    };

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
                <Box style={{ width: "280px" }}>

                    <Flex justify="space-between" align="center">
                        <Title order={2}>Forgot Password?</Title>
                        <Button variant='default' radius="lg" size='xs'> Go Back  </Button>
                    </Flex>

                    <Text size="sm" mt={20}>
                        Enter the email address you used when you joined and we’ll send you instructions to reset your password.

                    </Text>

                    <Text size="sm" mt={10}>
                        For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.
                    </Text>

                    <TextInput
                        mt={20}
                        label="Email Address"
                        placeholder=""
                        type='email'
                    />

                    <Button mt={20} color='blue' radius="md" size='md' onClick={open} > Send  </Button>

                    <Modal centered opened={opened} onClose={close} withCloseButton={false}>

                        <Alert variant="light" color="blue" title="Didn't receive your code?" icon={<IconInfoCircle />}>
                            Allow a few minutes for the message to arrive.
                        </Alert>

                        <Title mt={10} order={2}>Update your password</Title>

                        <PasswordInput
                            my={10}

                            label="New Password"
                            placeholder=""
                        />
                        <PasswordInput
                            my={10}
                            mb={20}
                            label="Confirm Password"
                            placeholder=""
                        />

                        <Text size="sm" mt={20}>Enter the code we just sent to </Text>
                        <Text size="sm" fw={500}>asasdas@gmail.com</Text>

                        <Flex mt={20} justify="space-between" align="center">
                            <PinInput placeholder="" type="number" oneTimeCode />
                            <Button variant='default' radius="lg" size='xs'> Resend Code </Button>
                        </Flex>

                        <Button mt={20} color='blue' radius="md" size='md' fullWidth onClick={handleButtonClick}> Reset Password  </Button>

                    </Modal>

                </Box>
            </Flex>

        </div>
    )
}

export default PasswordReset