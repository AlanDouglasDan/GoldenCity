import { StyleSheet } from "react-native";

import { palette, typography } from "core/styles";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: palette.WHITE,
  },
  innerContainer: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: "center",
  },
  bigText: {
    ...typography.header32,
    color: palette.BLACK,
    textAlign: "center",
  },
});
