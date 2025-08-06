import {Platform, StyleSheet} from 'react-native';

import {palette} from 'core/styles/palette';
import {typography} from 'core/styles/typography';

export default StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
  },
  inputFocus: {
    borderWidth: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: palette.BLACK,
    marginBottom: 4,
  },
  inputContainer: {
    position: 'relative',
  },
  textCode: {
    ...typography.text18,
    position: 'absolute',
    top: 16,
    left: 61,
  },
  iconContainer: {
    justifyContent: 'center',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 3 : 10,
    right: 2,
    height: 25,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  icon: {
    height: 25,
  },
  textError: {
    ...typography.text12,
    color: palette.RED,
    marginTop: 4,
  },

  // Bottom Sheet Styles
  header: {
    height: 24,
    backgroundColor: "#2563EB",
    overflow: 'hidden',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: palette.WHITE,
    position: 'relative',
    paddingHorizontal: '6.54%',
    paddingBottom: 20,
  },
  closeBtn: {
    // position: "absolute",
    // right: 25,
    // top: 25,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1
  },
  bottomSheetTitle: {
    ...typography.header20,
    // fontFamily: 'Comfortaa-Bold',
    color: palette.BLACK,
    marginTop: 27,
    marginBottom: 20,
    width: '90%',
  },
  optionContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 7,
    marginLeft: -10,
  },
  optionLabel: {
    ...typography.text16,
    fontWeight: '400',
    color: palette.BLACK,
  },
  optionIcon: {
    height: 20,
    width: 20,
  },
  paddedBackground: {
    paddingHorizontal: '6.54%',
    backgroundColor: palette.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
