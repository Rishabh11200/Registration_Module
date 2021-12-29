import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    padding: 10,
    marginHorizontal: '20%',
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 90,
    backgroundColor: Colors.babyBlue,
    shadowColor: Colors.black,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    color: Colors.black,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: Screen => ({
    fontSize: Screen.onePixel * 18,
    fontWeight: '700',
    color: Colors.black,
  }),
});
