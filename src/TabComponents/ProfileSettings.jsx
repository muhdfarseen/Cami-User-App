import React, { useState } from 'react';
import { Divider, Image, Drawer, NavLink, rem, Badge, Center, Group, SegmentedControl, Card, Title, BackgroundImage, Alert, PinInput, NumberInput, Modal, Select, Flex, Mark, Grid, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import { IconLogout2, IconMailExclamation, IconLock, IconCreditCard, IconInfoCircle } from '@tabler/icons-react'
import camicard from "/CamiCard.svg"
import camicardlogo from "/CamiCardLogo.svg"
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

function ProfileSettings() {

  const [EditProfileModalOpened, { open: openEditProfileModal, close: closeEditProfileModal }] = useDisclosure(false);
  const [paymentModalOpened, { open: openPaymentModal, close: closePaymentModal }] = useDisclosure(false);
  const [passwordModalOpened, { open: openPasswordModal, close: closePasswordModal }] = useDisclosure(false);

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
              <Box style={{ backgroundImage: `url(${camicard})`, borderRadius: '10px' }} p={30} radius={10}>
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
              </Box>
            </Box>

            <Title order={3}>Eva Martinez</Title>
            <Text fw={500} size="md" >Information Technology</Text>
            <Text size="md" c="dimmed" >2020 - 24 Batch</Text>

          </Grid.Col>
        </Grid>

        <Divider my="md" />

        <Flex mt={20} pb={80} direction="column" gap={10}>

          <NavLink
            label="Change Email Address"
            leftSection={<IconMailExclamation size="1rem" stroke={1.5} />}
            onClick={openEditProfileModal}
          />

          <NavLink
            label="Change Password"
            leftSection={<IconLock size="1rem" stroke={1.5} />}
            onClick={openPasswordModal}
          />

          <NavLink
            label="Payment Details"
            leftSection={<IconCreditCard size="1rem" stroke={1.5} />}
            onClick={openPaymentModal}
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

      {/* Modal for Edit Profile */}

      <Modal size="xs" centered opened={EditProfileModalOpened} onClose={closeEditProfileModal} withCloseButton={false} zIndex={2001} >
        <Title order={3}>Change Email Address</Title>
        <TextInput
          mt={10}
          label="New Email Address"
          placeholder=""
          type='email'
        />
        <PasswordInput
          mt={10}
          label="Password"
          placeholder=""
        />
        <Button mt={20} color='blue' radius="md" size='md' fullWidth > Change Email  </Button>
      </Modal>

      {/* Modal for Payment Details */}

      <Modal size="xs" centered opened={paymentModalOpened} onClose={closePaymentModal} withCloseButton={false} zIndex={2001} >
        <Title order={3}>Paid ₹500</Title>
        <Text fw={500} size="xs" >on 17 Jan 2024</Text>
        <Text fw={400} size="md" mt={10} c="gray" >Valid till 30 March 2025</Text>
      </Modal>

      {/* Modal for Change Password */}

      <Modal size="xs" centered opened={passwordModalOpened} onClose={closePasswordModal} withCloseButton={false} zIndex={2001} >
        <Title order={3}>Change Password</Title>
        <PasswordInput
          mt={10}
          label="Current Password"
          placeholder=""
        />
        <PasswordInput
          mt={10}
          label="New Password"
          placeholder=""
        />
        <PasswordInput
          mt={10}
          label="Confirm Password"
          placeholder=""
        />
        <Button mt={20} color='blue' radius="md" size='md' fullWidth > Change Password  </Button>
      </Modal>

    </div>
  )
}

export default ProfileSettings