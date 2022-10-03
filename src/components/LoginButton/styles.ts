import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '85%',
    height:36,
    borderRadius:6,
    backgroundColor:THEME.COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle:{
    color:THEME.COLORS.TEXT,
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
  }
});