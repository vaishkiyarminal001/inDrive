import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from '../../services/Firebase';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      Alert.alert('Reset password email sent', 'Check your email to reset your password.');
    } catch (error) {
      Alert.alert('Reset password failed', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPassword;
