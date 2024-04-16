import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const BookRideScreen = () => {
  const handleBookRide = () => {
    // Simulate booking process
    console.log('Booking a ride...');

    // Showing an alert message to indicate that the ride has been booked
    Alert.alert(
      'Ride Booked',
      'Your ride has been successfully booked!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Book Ride Screen</Text>
      <Button title="Book Ride" onPress={handleBookRide} />
    </View>
  );
};

export default BookRideScreen;
