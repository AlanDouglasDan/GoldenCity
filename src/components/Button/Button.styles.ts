import { StyleSheet } from 'react-native';

import { palette, typography } from 'core/styles';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: palette.BLACK,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  disabled: {
    backgroundColor: palette.DISABLED,
  },
  loading: {
    opacity: 0.5,
  },
  transparent: {
    backgroundColor: palette.WHITE,
  },
  buttonText: {
    color: palette.WHITE,
    ...typography.header18,
  },
});
