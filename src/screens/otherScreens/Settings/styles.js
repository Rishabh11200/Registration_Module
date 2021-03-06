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
  insideTextInput: {
    flex: 1,
    color: Colors.black,
  },
  TextView: {
    flexDirection: 'row',
    elevation: 10,
    padding: 10,
    margin: 20,
    borderRadius: 90,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadeBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  text: {
    fontSize: 18,
    color: Colors.black,
    marginLeft: 10,
  },
});
export default styles;
