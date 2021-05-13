import React from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  TouchableNativeFeedback,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

const UserPage = ({ navigation }) => {
  const user = navigation.getParam('user');

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <View style={styles.userFieldContainer}>
          <FontAwesome5 name='user-alt' size={24} color='black' />
          <Text style={styles.fullname}>
            {user.first_name} {user.last_name}
          </Text>
        </View>
        <TouchableNativeFeedback
          onPress={() => Linking.openURL(`mailto:${user.email}`)}
          style={styles.userFieldContainer}
        >
          <Text style={styles.emailLabel}>{user.email}</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

UserPage.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').first_name,
});

export default UserPage;
