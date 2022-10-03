import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.OVERLAY
  },
  content:{
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeIcon:{
    alignSelf: 'flex-end',
    margin: 16,
  },
  button:{
    height:36,
    borderRadius:6,
    backgroundColor:THEME.COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  fotologo:{
    width:80,
    height:80,
    borderRadius: 60,
    marginBottom: 16,
    marginTop: 16,
  },
  username:{
    color:THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  btnhome: {
    width: 144,
    height:36,
    borderRadius:6,
    backgroundColor:THEME.COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom:32
  },
  buttonTitle:{
    color:THEME.COLORS.TEXT,
    fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
  }
});