import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  }),
  cardView: screen => ({
    width: '90%',
    height: screen.up ? screen.height * 0.28 : screen.height * 0.7,
    backgroundColor: Colors.white,
    margin: screen.width * 0.05,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 2,
  }),
  image: screen => ({
    width: screen.up ? screen.width * 0.4 : screen.height * 0.4 - 4,
    height: screen.up ? screen.height * 0.16 : screen.height * 0.45,
    borderRadius: 10,
  }),
  title: screen => ({
    color: Colors.black,
    fontSize: screen.onePixel * 20,
    fontWeight: '700',
  }),
  price: screen => ({
    textAlign: 'center',
    fontSize: 18 * screen.onePixel,
    fontWeight: '600',
    marginTop: 5,
  }),

  text: screen => ({
    marginTop: 10,
    fontSize: 18 * screen.onePixel,
    color: Colors.black,
  }),
});
export default styles;
