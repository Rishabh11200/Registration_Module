import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll: {
    marginHorizontal: 10,
    margin: 5,
  },
  title: screen => ({
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: screen.onePixel * 22,
    color: Colors.black,
  }),
  text: screen => ({
    marginLeft: 20,
    fontStyle: 'italic',
    fontSize: screen.onePixel * 19,
    color: Colors.black,
  }),
  image: screen => ({
    width: '99%',
    height: screen.up ? undefined : (screen.height * 5) / 10,
    borderRadius: 20,
    aspectRatio: 3 / 2,
  }),
  price: {
    fontSize: 16,
    marginLeft: 20,
    color: Colors.black,
  },
});
export default styles;
