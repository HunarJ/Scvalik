import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    // width: '100%',
  },
  buttonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;