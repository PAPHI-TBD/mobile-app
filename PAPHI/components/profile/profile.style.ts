import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bannerContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    position: 'absolute',
    bottom: -75,
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 390,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  actionIcon:{
    width: 30,
    height: 29,
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  settingIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: 45, 
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  connectButton: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  plusIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  username: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 10,
  },
  connections: {
    fontSize: 12,
    color: 'white',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  friends: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  bio: {
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
    alignSelf: 'flex-start',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '20%',
  },
  tabsContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#000', 
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingVertical: 15,
  },
  tabLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    paddingVertical: 15,
  },
  tabLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageContainer: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 15,
    borderRadius: 10, 
    overflow: 'hidden'
  },
  gridImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageLabel: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1a1a1a',
    paddingVertical: 15,
  },
  eventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  eventsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  eventCard: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    marginHorizontal: 40,
  },
  eventImage: {
    width: '100%',
    height: 120, 
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10, 
  },
  eventInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: 'white',
  },
  eventStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 100 
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 5,
  },
  eventStatusText: {
    fontSize: 12, 
    color: 'white',
  },
  eventDate: {
    fontSize: 12, 
    color: 'white',
  },
  addEventButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 40,
    marginHorizontal: 170,
  },
  addEventText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  iconContainer:{
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
  },
  eventText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    paddingLeft: 40,
  }
});

export default styles;
