import React from 'react';
import { View, Button } from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Button title="Book Ride" onPress={() => console.log('Book ride button pressed')} />
    </View>
  );
};

export default MapScreen;
