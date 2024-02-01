import React, { useEffect, useRef, useState } from 'react';
import { Image, Center, Group, SegmentedControl, Card, Title, BackgroundImage, Alert, PinInput, NumberInput, Modal, Select, Flex, Mark, Grid, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import L from 'leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconImage from '../assets/Bus.png';

function Busmap() {

  const mapContainerRef = useRef(null);
  const [busMarkers, setBusMarkers] = useState({});
  const [selectedBus, setSelectedBus] = useState('1');

  const customIcon = new Icon({
    iconUrl: customIconImage,
    iconSize: [82, 82],
    popupAnchor: [0, -32],
  });

  useEffect(() => {
    const map = L.map(mapContainerRef.current).setView([11.8745, 75.3704], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(map);

    const markers = {
      '1': L.marker([11.8675, 75.3554], { icon: customIcon }).bindPopup('Bus 1'),
      '2': L.marker([11.8567, 75.3579], { icon: customIcon }).bindPopup('Bus 2'),
      '3': L.marker([11.8632, 75.3631], { icon: customIcon }).bindPopup('Bus 3'),
      '4': L.marker([11.8745, 75.3704], { icon: customIcon }).bindPopup('Bus 4'),
      '5': L.marker([11.8806, 75.3577], { icon: customIcon }).bindPopup('Bus 5'),
      '6': L.marker([11.8952, 75.3662], { icon: customIcon }).bindPopup('Bus 6'),
    };

    setBusMarkers(markers);

    markers[selectedBus].addTo(map);

    return () => {
      map.remove();
    };
  }, [selectedBus]);

  useEffect(() => {
    Object.keys(busMarkers).forEach((bus) => {
      if (bus === selectedBus) {
        busMarkers[bus].openPopup();
      } else {
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

        <Flex direction='column' wrap="wrap">
          <Title order={2}>Where is my Bus</Title>
          <SegmentedControl
            mt={20}
            size="md"
            fullWidth
            data={['1', '2', '3', '4', '5', '6']}
            value={selectedBus}
            onChange={handleBusChange}
          />
        </Flex>

        <Card mt={20}  padding="" radius="md" withBorder>
          <div ref={mapContainerRef} style={{ minHeight: `calc(100vh - 220px)`, zIndex: '10' }} />
        </Card>

      </Box>
    </div>
  )
}

export default Busmap