import { StyleSheet } from "react-native";

import { palette, typography } from "core/styles";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: palette.WHITE,
  },
  contentContainer: {
    paddingTop: 12,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: "#eee",
  },
  title: {
    ...typography.header24,
    color: palette.BLACK,
  },
  filterIcon: {
    padding: 8,
    borderRadius: 6,
  },

  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  filtersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  filterItem: {
    width: "48%", // two per row on mobile
    marginBottom: 16,
  },
  label2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#4B5563",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    fontSize: 14,
  },
});
