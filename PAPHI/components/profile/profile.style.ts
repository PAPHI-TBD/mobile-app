import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',   
  },
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    // marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -75,
    borderWidth: 4,
    borderColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'black', 
  },
  actionIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  BellIcon: {
    width: 30,
    height: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  editProfileButtonText: {
    color: 'white',
  },
  shareProfileButtonText: {
    color: '#4A3AFF',
  },
  plusIcon: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addFriendButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  messageButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  username: {
    color: '#888888',
    fontSize: 14,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  shareProfileButton: {
    backgroundColor: 'white',
    borderColor: '#4A3AFF',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    width: '48%',
  },
  editProfileButton: {
    backgroundColor: '#4A3AFF',
    borderColor: '#4A3AFF',
  },
  connections: {
    marginVertical: 5,
  },
  friends: {
    marginVertical: 5,
  },
  bio: {
    textAlign: 'center',
    marginVertical: 15,
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  tabsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  activeTabText: {
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#888888',
  },
  tabLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  tabLabel: {
    color: '#888888',
  },
  scrollViewContent: {
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
    width: 100,
    height: 100,
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUserInfo: {
    flexDirection: 'column',
  },
  postUserName: {
    fontWeight: 'bold',
  },
  postUserHandle: {
    color: '#888888',
  },

  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  postActionText: {
    color: '#888888',
  },
  eventsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  eventCard: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  eventColorTab: {
    width: 30,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
  eventDateIndicator: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  eventImageContainer: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginLeft: 10,
    marginVertical: 10,
  },
  eventContent: {
    flex: 1,
    padding: 15,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  eventImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    paddingLeft: 50,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
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
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  eventStatusText: {
    color: '#FFFFFF',
  },
  eventDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  eventTime: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#000',
  },
  notificationIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  calendarContainer: {
    backgroundColor: 'white',
    marginBottom: 20,
    position: 'relative',
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  calendarHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 10,
  },
  viewSwitchButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  viewSwitchText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default styles;