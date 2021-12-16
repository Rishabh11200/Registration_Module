import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  imageView: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: Colors.babyBlue,
  },
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
  button: {
    marginTop: 30,
    padding: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shadeBlue,
    borderRadius: 90,
  },
  closeText: {
    marginTop: 10,
    color: Colors.black,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.black,
  },
});
