import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import styles from './styles';

export default ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchUsers = async () => {
    const res = await axios.get(`https://reqres.in/api/users?page=${page}`);

    if (
      res &&
      res.status === 200 &&
      res.data &&
      res.data.data &&
      res.data.data.length &&
      res.data.data.length >= 1
    ) {
      setUsers(prev => [...prev, ...res.data.data]);
      setPage(prev => prev + 1);
    } else {
      setHasNextPage(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={users}
        renderItem={({ item }) => (
          <TouchableNativeFeedback
            onPress={() => navigation.navigate('User', { user: item })}
          >
            <View style={styles.itemContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.infoContainer}>
                <Text style={styles.nameLabel}>
                  {item.first_name} {item.last_name}
                </Text>
                <Text style={styles.emailLabel}>{item.email}</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
        )}
        onEndReachedThreshold={0.1}
        onEndReached={fetchUsers}
        ListFooterComponent={
          hasNextPage && (
            <ActivityIndicator
              size='large'
              color='black'
              style={styles.activityIndicator}
            />
          )
        }
      />
    </View>
  );
};
