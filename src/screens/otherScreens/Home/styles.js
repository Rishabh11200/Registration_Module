import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
    width: '100%',
  }),
  text: screen => ({
    fontWeight: 'bold',
    fontSize: screen.onePixel * 22,
    color: Colors.white,
  }),
  view: screen => ({
    backgroundColor: Colors.white,
    margin: 20,
    borderRadius: 20,
    width: screen.up ? (screen.width * 3.5) / 10 : (screen.width * 2) / 10,
  }),
  insideImage: {
    position: 'absolute',
    marginLeft: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
});
export default styles;
