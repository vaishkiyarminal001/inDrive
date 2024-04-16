import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/User/HomeScreen';
import BookRideScreen from './screens/User/BookRideScreen';
import DashboardScreen from './screens/Driver/DashboardScreen';
import RideRequestScreen from './screens/Driver/RideRequestScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {/* User Screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookRide" component={BookRideScreen} />

        {/* Driver Screens */}
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="RideRequest" component={RideRequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import firebase from './services/Firebase';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/SignUp';
// import HomeScreen from './screens/User/HomeScreen';
// import DashboardScreen from './screens/Driver/DashboardScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState(null);

//   // Handle user state changes
//   const onAuthStateChanged = (user) => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {user ? (
//           // If user is logged in, navigate to appropriate screen
//           user.isDriver ? (
//             <Stack.Screen name="Dashboard" component={DashboardScreen} />
//           ) : (
//             <Stack.Screen name="Home" component={HomeScreen} />
//           )
//         ) : (
//           // If user is not logged in, navigate to authentication screens
//           <>
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Signup" component={Signup} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
