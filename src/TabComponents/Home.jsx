import React from 'react'
import { Image, Center, BackgroundImage, Alert, PinInput, NumberInput, Modal, Group, Select, Flex, Mark, Grid, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import camicard from "../Assets/CamiCard.svg"
import camicardlogo from "../Assets/CamiCardLogo.svg"

function Home() {
  return (
    <div>
      <Grid p={30}>
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>

          <Title order={2}>Eva Martinez</Title>
          <Text fw={500} size="md" >Information Technology</Text>
          <Text size="md" c="dimmed" >2020 - 24 Batch</Text>

          <Box mt={30} >
            <BackgroundImage src={camicard} p={30} radius={10}>
              <Flex justify="space-between">
                <Text fw={400} style={{ letterSpacing: "3px" }} size="md" color='#515151' >TLY20IT038</Text>
                <Image src={camicardlogo} w={60} ></Image>
              </Flex>

              <Flex mt="25%" justify="space-between">
                <div>
                  <Text color='#515151' size="xs" >Caming From</Text>
                  <Text color='#515151' fw={700} size="lg" >Kannur Stand</Text>
                </div>
                <div>
                  <Text color='#515151' size="xs" >Valid till</Text>
                  <Text color='#515151' fw={700} size="lg" >07/25</Text>
                </div>
              </Flex>
            </BackgroundImage>
          </Box>

        </Grid.Col>
      </Grid>
    </div>
  )
}

export default Home