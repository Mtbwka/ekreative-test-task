import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  itemContainer: {
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  nameLabel: {
    fontSize: 24,
  },
  emailLabel: {
    fontSize: 16,
  },
  avatar: {
    height: 100,
    width: 100,
  },
  activityIndicator: {
    height: 64,
  },
});
