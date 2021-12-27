import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
    width: '100%',
  }),
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.white,
  },
  view: {
    backgroundColor: Colors.white,
    margin: 20,
    borderRadius: 20,
  },
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
