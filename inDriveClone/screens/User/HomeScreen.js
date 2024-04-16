import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToOtherScreen = () => {
    navigation.navigate('BookRide'); // Navigate to 'Other' screen
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Book the Ride" onPress={goToOtherScreen} />
    </View>
  );
};

export default HomeScreen;
