import React from 'react';
import { View, Text, Button } from 'react-native';

const BookRideScreen = () => {
  const handleBookRide = () => {
    // Implement logic to book a ride
    console.log('Booking a ride...');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Book Ride Screen</Text>
      <Button title="Book Ride" onPress={handleBookRide} />
    </View>
  );
};

export default BookRideScreen;
