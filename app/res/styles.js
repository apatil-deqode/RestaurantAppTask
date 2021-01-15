import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //Search Bar Components
  searchBackground: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchIconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },

  //Restaurant List Components
  headerTitleRestaurantList: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});
export default styles;
