import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
  }),
  mainView: screen => ({
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    margin: 10,
    elevation: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: Colors.xCyan,
  }),
  image: {
    width: 125,
    height: 120,
    borderRadius: 20,
  },
  insideView: {
    flex: 1,
    justifyContent: 'flex-start',
    marginRight: 30,
  },
  text: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '600',
  },
  price: {
    fontSize: 16,
    color: Colors.black,
  },
});
export default styles;
