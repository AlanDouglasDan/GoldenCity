import { StyleSheet } from "react-native";

import { palette, typography } from "core/styles";

export default StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: palette.WHITE,
    overflow: "hidden",
    marginBottom: 16,
  },
  imageContainer: {
    height: 192,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  statusBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
  },
  statusText: {
    color: "#2563EB",
    fontWeight: "600",
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: "600",
  },
  location: {
    color: "#6B7280",
    marginVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  boldText: {
    fontWeight: "600",
  },
  textPrimary: {
    color: "#2563EB",
  },
  textSecondary: {
    color: "#6B7280",
    fontSize: 14,
  },
  fontMedium: {
    fontWeight: "500",
  },
  progressBarBackground: {
    backgroundColor: "#E5E7EB",
    borderRadius: 9999,
    height: 8,
    overflow: "hidden",
  },
  progressBarFill: {
    backgroundColor: "#2563EB",
    height: "100%",
  },
  tokenContainer: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
});
