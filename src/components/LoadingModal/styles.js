import {StyleSheet} from 'react-native';
import Colors from '../../constants/color';
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    padding: '10%',
    margin: 20,
    borderRadius: 45,
    backgroundColor: Colors.white,
    shadowColor: Colors.babyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: Colors.black,
  },
});
export default styles;
