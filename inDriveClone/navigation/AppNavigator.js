import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import HomeScreen from './screens/User/HomeScreen';
import DashboardScreen from './screens/Driver/DashboardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
