import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  imageView: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.babyBlue,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    padding: '10%',
    margin: 20,
    borderRadius: 45,
    backgroundColor: Colors.white,
    shadowColor: Colors.babyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },

  button: {
    marginTop: 30,
    padding: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shadeBlue,
    borderRadius: 90,
  },
  closeText: {
    marginTop: 10,
    color: Colors.black,
    textDecorationLine: 'underline',
  },
  buttonText: screen => ({
    textAlign: 'center',
    fontSize: 18 * screen.onePixel,
    color: Colors.black,
  }),
});
