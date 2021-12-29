import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    flexDirection: screen.up ? 'column' : 'row',
    justifyContent: 'center',
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
  }),
  headingText: screen => ({
    fontSize: screen.onePixel * 20,
    color: Colors.black,
    padding: '3%',
    fontWeight: '800',
  }),
  error: screen => ({
    fontSize: screen.onePixel * 14,
    textAlign: 'justify',
    fontWeight: '700',
    color: Colors.red,
  }),
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
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.black,
  },
  otpView: {
    width: '80%',
    height: 200,
    color: Colors.black,
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 4,
    color: Colors.black,
    fontSize: 18,
  },

  underlineStyleHighLighted: {
    borderColor: Colors.vividCyan,
  },
  closeText: {
    marginTop: 10,
    color: Colors.black,
    textDecorationLine: 'underline',
  },
});

export default styles;
