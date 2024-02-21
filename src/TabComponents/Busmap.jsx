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

  const mapRef = useRef(null); 

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
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  
useEffect(() => {
  const mapInstance = L.map(mapContainerRef.current).setView([11.8745, 75.3704], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy Cami',
  }).addTo(mapInstance);

  mapRef.current = mapInstance;

  const markers = {
    '1': L.marker([0, 0], { icon: customIcon }).bindPopup('Bus 1'),
    '2': L.marker([0, 0], { icon: customIcon }).bindPopup('Bus 2'),
    '3': L.marker([0, 0], { icon: customIcon }).bindPopup('Bus 3'),
    '4': L.marker([0, 0], { icon: customIcon }).bindPopup('Bus 4'),
    '5': L.marker([0, 0], { icon: customIcon }).bindPopup('Bus 5'),
    '6': L.marker([0, 0], { icon: customIcon }).bindPopup('Bus 6'),
  };

  setBusMarkers(markers);

  Object.values(markers).forEach(marker => {
    marker.addTo(mapInstance);
  });

  return () => {
    mapInstance.remove();
  };
}, []);

useEffect(() => {
  if (apiResponse[selectedBus]) {
    // Hide all markers
    Object.values(busMarkers).forEach(marker => {
      marker.removeFrom(mapRef.current); // Use mapRef.current here
    });

    // Update marker position for the selected bus
    busMarkers[selectedBus].setLatLng([apiResponse[selectedBus].latitude, apiResponse[selectedBus].longitude]);
    busMarkers[selectedBus].addTo(mapRef.current); // Use mapRef.current here

    
    // Open popup if necessary
    if (selectedBus === selectedBus) {
      busMarkers[selectedBus].openPopup();
    } else {
      busMarkers[selectedBus].closePopup();
    }
  }
}, [apiResponse, selectedBus, busMarkers]);

  
  

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