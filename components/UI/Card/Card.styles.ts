import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: colors.primary,
    borderWidth: 2,
    marginVertical: 8,
    width: 300,
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,

  }
});

export default styles;