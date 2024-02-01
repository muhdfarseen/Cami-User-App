import React from 'react'
import { Divider, Image, Drawer, NavLink, rem, Badge, Center, Group, SegmentedControl, Card, Title, BackgroundImage, Alert, PinInput, NumberInput, Modal, Select, Flex, Mark, Grid, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import { IconLogout2, IconUserEdit, IconLock, IconCreditCard, IconInfoCircle } from '@tabler/icons-react'
import camicard from "../assets/CamiCard.svg"
import camicardlogo from "../assets/CamiCardLogo.svg"
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

function ProfileSettings() {

  const [opened, { open, close }] = useDisclosure(false);

  const navigate = useNavigate();

    const handleButtonClick = () => {

        navigate('/');
    };

  return (
    <div>
      <Box p={30}>
        <Title order={2}>Accounts Center</Title>

        <Grid mt={20}>
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>

            <Box mb={20} >
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

            <Title order={3}>Eva Martinez</Title>
            <Text fw={500} size="md" >Information Technology</Text>
            <Text size="md" c="dimmed" >2020 - 24 Batch</Text>

          </Grid.Col>
        </Grid>

        <Divider my="md" />

        <Flex mt={20} pb={80} direction="column" gap={10}>

          <NavLink
            label="Edit Profile"
            leftSection={<IconUserEdit size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Change Password"
            leftSection={<IconLock size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Payment Details"
            onClick={open}
            leftSection={<IconCreditCard size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="About"
            leftSection={<IconInfoCircle size="1rem" stroke={1.5} />}
          />
          <NavLink
            label="Log out"
            style={{ color: 'red' }}
            leftSection={<IconLogout2 size="1rem" stroke={1.5} />}
            onClick={handleButtonClick}
          />

        </Flex>
      </Box>

      <Modal size="20%" centered radius="md" opened={opened} onClose={close} withCloseButton={false} zIndex={20000}>
        <Title order={3}>Paid ₹500</Title>
        <Text fw={500} size="md" >on 17 jan 2024</Text>
        <Text fw={400} size="sm" >Valid till 30 March 2025</Text>
      </Modal>

    </div>
  )
}

export default ProfileSettings