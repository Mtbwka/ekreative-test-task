import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default ({ navigation }) => {
  const user = navigation.getParam('user');

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.fullname}>
          {user.first_name} {user.last_name}
        </Text>
        <Text>{user.email}</Text>
      </View>
    </View>
  );
};
