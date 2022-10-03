import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo:{
    width: 214,
    height:120,
    marginTop: 148,
    marginBottom:48
  },
  button:{
    width: '50%',
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