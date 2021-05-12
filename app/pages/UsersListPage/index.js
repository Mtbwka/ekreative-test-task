import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

import styles from './styles';

export default ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users');

    if (
      res &&
      res.status === 200 &&
      res.data &&
      res.data.data &&
      res.data.data.length
    ) {
      setUsers(res.data.data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={users}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('User', { user: item })}
            >
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.avatar }}
                  style={{ height: 64, width: 64 }}
                />
                <View style={styles.infoContainer}>
                  <Text>
                    {item.first_name} {item.last_name}
                  </Text>
                  <Text>{item.email}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {/* <Button title='MOVE' onPress={() => navigation.navigate('User')} /> */}
    </View>
  );
};
