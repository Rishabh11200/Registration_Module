import {ScrollViewComponent, StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
  },
  headingText: screen => ({
    fontSize: screen.onePixel * 20,
    color: Colors.black,
    padding: '3%',
    fontWeight: '800',
  }),
  wholePage: {
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  textView: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  icon: {
    marginTop: 15,
  },
  input: {
    width: '80%',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    fontSize: 18,
    marginLeft: 10,
  },
  text: {
    width: '80%',
    fontSize: 18,
    color: Colors.black,
    marginTop: 15,
    paddingLeft: 15,
  },
  text2: {
    fontSize: 18,
    color: Colors.black,
    marginTop: 15,
    paddingLeft: 15,
  },
});
export default styles;
