import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
  }),
  appButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    backgroundColor: Colors.lGreen,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginLeft: 10,
  },
});
export default styles;
