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
});
export default styles;
