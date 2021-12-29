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
    // marginLeft: 40,
    flexDirection: 'column',
    // marginTop: 10,
    // marginRight: 40,
    // marginBottom: 10,
    margin: 10,
    elevation: 10,
    backgroundColor: Colors.white,
    borderRadius: 20,
    // height: 170,
    // width: screen.up ? (screen.width * 3.5) / 10 : (screen.width * 2) / 10,
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
