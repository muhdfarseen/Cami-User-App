import React, { useEffect, useRef, useState } from 'react';
import { Image, Center, Group, SegmentedControl, Card, Title, BackgroundImage, Alert, PinInput, NumberInput, Modal, Select, Flex, Mark, Grid, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import L from 'leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconImage from '/Bus.png';
import axios from 'axios';

function Busmap() {

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const mapContainerRef = useRef(null);

  const [busMarkers, setBusMarkers] = useState({});
  const [selectedBus, setSelectedBus] = useState('1');
  const [apiResponse, setApiResponse] = useState({});

  const customIcon = new Icon({
    iconUrl: customIconImage,
    iconSize: [82, 82],
    popupAnchor: [0, -32],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/bus-locations`);
        const busLocations = response.data;
        setApiResponse(busLocations);
      } catch (error) {
        console.error('Error fetching bus locations:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([11.8745, 75.3704], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy Cami',
    }).addTo(map);

    const markers = {
      '1': apiResponse['1'] && L.marker([apiResponse['1'].latitude, apiResponse['1'].longitude], { icon: customIcon }).bindPopup('Bus 1'),
      '2': apiResponse['2'] && L.marker([apiResponse['2'].latitude, apiResponse['2'].longitude], { icon: customIcon }).bindPopup('Bus 2'),
      '3': apiResponse['3'] && L.marker([apiResponse['3'].latitude, apiResponse['3'].longitude], { icon: customIcon }).bindPopup('Bus 3'),
      '4': apiResponse['4'] && L.marker([apiResponse['4'].latitude, apiResponse['4'].longitude], { icon: customIcon }).bindPopup('Bus 4'),
      '5': apiResponse['5'] && L.marker([apiResponse['5'].latitude, apiResponse['5'].longitude], { icon: customIcon }).bindPopup('Bus 5'),
      '6': apiResponse['6'] && L.marker([apiResponse['6'].latitude, apiResponse['6'].longitude], { icon: customIcon }).bindPopup('Bus 6'),
    };

    setBusMarkers(markers);

    if (markers[selectedBus]) {
      markers[selectedBus].addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [apiResponse, selectedBus]);

  useEffect(() => {
    Object.keys(busMarkers).forEach((bus) => {
      if (bus === selectedBus && busMarkers[bus]) {
        busMarkers[bus].openPopup();
      } else if (busMarkers[bus]) {
        busMarkers[bus].closePopup();
      }
    });
  }, [selectedBus, busMarkers]);

  const handleBusChange = (value) => {
    setSelectedBus(value);
  };

  return (
    <div>
      <Box p={30}>

        <Title order={2}>Where is my Bus</Title>

        <Card mt={20} padding="" radius="md" withBorder>
          <div ref={mapContainerRef} style={{ minHeight: `calc(100dvh - 260px)`, zIndex: '10' }} />
        </Card>

        <SegmentedControl
          mt={20}
          size="md"
          fullWidth
          data={['1', '2', '3', '4', '5', '6']}
          value={selectedBus}
          onChange={handleBusChange}
        />

      </Box>
    </div>
  )
}

export default Busmap