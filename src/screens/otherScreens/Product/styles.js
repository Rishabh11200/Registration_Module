import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
  }),
  mainView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 40,
    flexDirection: 'column',
    marginTop: 10,
    marginRight: 40,
    marginBottom: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '600',
    marginTop: 10,
  },
});
export default styles;
