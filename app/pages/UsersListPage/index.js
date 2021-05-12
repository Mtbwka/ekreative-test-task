import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => {
  return (
    <View>
      <Text>User List</Text>
      <Button title='MOVE' onPress={() => navigation.navigate('User')} />
    </View>
  );
};
