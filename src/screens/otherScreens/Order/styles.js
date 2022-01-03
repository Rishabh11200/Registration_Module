import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  }),
  cardView: screen => ({
    width: '90%',
    height: screen.up ? screen.height * 0.28 : screen.height * 0.7,
    backgroundColor: Colors.white,
    margin: screen.width * 0.05,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.black,
    borderWidth: 2,
  }),
  image: screen => ({
    width: screen.up ? screen.width * 0.3 : screen.width * 0.1,
    height: screen.up ? screen.height * 0.1 : screen.height * 0.2,
    borderRadius: 10,
  }),
  title: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '700',
  },
  price: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },

  text: {
    marginTop: 10,
    fontSize: 18,
    color: Colors.black,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'center',
    elevation: 25,
    padding: '10%',
    margin: 20,
    borderRadius: 45,
    backgroundColor: Colors.white,
    shadowColor: Colors.babyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    marginTop: 10,
    color: Colors.black,
    textDecorationLine: 'underline',
  },
  rowView: {
    flexDirection: 'row',
  },
});
export default styles;
