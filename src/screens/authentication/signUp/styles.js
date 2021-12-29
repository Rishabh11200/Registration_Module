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
  separator: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  lastView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  text1: screen => ({
    fontWeight: 'bold',
    fontSize: screen.onePixel * 18,
    color: Colors.black,
  }),
  text2: screen => ({
    fontWeight: 'bold',
    fontSize: screen.onePixel * 18,
    color: Colors.darkBlue,
  }),
});
export default styles;
