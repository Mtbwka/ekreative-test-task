import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  fullname: {
    fontSize: 24,
  },
});
