import React from 'react';
import { View, Text, Button } from 'react-native';

const RideRequestScreen = () => {
  const handleAcceptRequest = () => {
    //logic to accept ride request
    console.log('Ride request accepted...');
  };

  const handleDeclineRequest = () => {
    // logic to decline ride request
    console.log('Ride request declined...');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ride Request Screen</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Accept Request" onPress={handleAcceptRequest} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Decline Request" onPress={handleDeclineRequest} />
      </View>
    </View>
  );
};

export default RideRequestScreen;
