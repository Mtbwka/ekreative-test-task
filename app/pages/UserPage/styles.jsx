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
    marginLeft: 10,
    fontSize: 24,
  },
  emailLabel: {
    marginLeft: 10,
    fontSize: 18,
    color: 'blue',
  },
  userFieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});
