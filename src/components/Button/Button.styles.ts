import { StyleSheet } from "react-native";

import { palette } from "core/styles";

export default StyleSheet.create({
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  disabled: {
    backgroundColor: palette.DISABLED,
  },
  loading: {
    opacity: 0.5,
  },
  transparent: {
    backgroundColor: "rgb(214 240 255)",
  },
});
