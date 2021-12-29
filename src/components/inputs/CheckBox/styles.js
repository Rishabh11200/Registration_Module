import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';
const styles = StyleSheet.create({
  checkBoxView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: screen => ({
    color: Colors.black,
    fontSize: screen.onePixel * 18,
    textAlign: 'justify',
  }),
});
export default styles;
