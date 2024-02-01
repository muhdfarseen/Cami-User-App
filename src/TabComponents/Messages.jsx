import React from 'react'
import { Image, rem, Badge, Center, Group, SegmentedControl, Card, Title, BackgroundImage, Alert, PinInput, NumberInput, Modal, Select, Flex, Mark, Grid, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import { IconSend, IconChecks, IconTrash, IconMessagePlus, IconMessageCheck } from '@tabler/icons-react';


function Messages() {

  const notifications = Array.from({ length: 10 }, (_, index) => index + 1);


  return (
    <div>
      <Box p={30}>

        <Title order={2}>Messages</Title>

        <Grid mt={20} pb={70}>
          {notifications.map((notification) => (
            <Grid.Col key={notification} span={{ base: 12, md: 6, lg: 3 }}>
              <Card withBorder radius="md">
                <Text mb="xs" fw={500}>
                  No Bus Tomorrow
                </Text>
                <Text size="sm" c="dimmed">
                  Due to unforeseen circumstances, there will be no bus service tomorrow. We apologize for any inconvenience caused.
                </Text>

                <Badge mt={10} leftSection={<IconChecks style={{ width: rem(12), height: rem(12) }} />} variant="outline" color="gray">
                  12 Jan 23
                </Badge>

              </Card>
            </Grid.Col>
          ))}
        </Grid>

      </Box>

    </div>
  )
}

export default Messages