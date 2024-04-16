import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [driversLocations, setDriversLocations] = useState([]);

  // Function to fetch drivers' locations (simulated)
  const fetchDriversLocations = () => {
    // Simulated drivers' locations data
    const driversData = [
      { id: 1, latitude: 37.7749, longitude: -122.4194 }, // Example location in San Francisco
      { id: 2, latitude: 34.0522, longitude: -118.2437 }, // Example location in Los Angeles
      // Add more simulated locations as needed
    ];
    setDriversLocations(driversData);
  };

  useEffect(() => {
    // Fetch drivers' locations on component mount
    fetchDriversLocations();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
       
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
