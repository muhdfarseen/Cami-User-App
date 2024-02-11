import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Grid, Card, Text, Badge, Title } from '@mantine/core';

function Messages() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const studentDataString = localStorage.getItem('studentData');
    const studentData = JSON.parse(studentDataString);

    if (studentData && studentData.admission_year && studentData.department) {
      const admissionYear = studentData.admission_year;
      const department = studentData.department;

      const fetchMessages = async () => {
        try {
          const response = await axios.get(`${baseUrl}/delivered-messages/${admissionYear}/${department}`);
          setMessages(response.data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };

      fetchMessages();

    } else {
      console.log('Admission year or department is missing in local storage');
    }
  }, []);


  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div>
      <Box p={30}>
        <Title order={2}>Messages</Title>
        <Grid mt={20} pb={70}>
          {messages.map((message) => (
            <Grid.Col key={message.msg_id} span={{ base: 12, md: 6, lg: 3 }}>
              <Card withBorder radius="md">
                <Text mb="xs" fw={500}>
                  {message.subject}
                </Text>
                <Text size="sm" c="dimmed">
                  {message.description}
                </Text>
                <Badge mt={10} variant="outline" color="gray">
                  {formatTime(message.sent_time)}
                </Badge>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Messages;
