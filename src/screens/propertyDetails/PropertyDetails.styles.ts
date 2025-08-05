import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
  buildingImage: {
    width: 300,
    height: 200,
    borderRadius: 12, // optional for better visuals
    marginRight: 12, // spacing between images
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    color: "#6B7280",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    gap: 12,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 8,
    gap: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    gap: 12,
  },
  tokenBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  tokenGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  //   label: {
  //     fontSize: 12,
  //     color: "#6B7280",
  //   },
  bold: {
    fontWeight: "600",
  },
  mono: {
    fontFamily: "monospace",
    fontSize: 12,
  },
  fullRow: {
    width: "100%",
    marginTop: 8,
  },
  financialBox: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  financialTitle: {
    fontWeight: "600",
    marginBottom: 12,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  medium: {
    fontWeight: "500",
  },

  rowBetween2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  eth: {
    color: "#2563EB",
  },
  roi: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginLeft: 4,
  },
  metrics: {
    marginVertical: 16,
    gap: 8,
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
    height: 8,
    borderRadius: 4,
    marginTop: 4,
  },
  progressBarFill: {
    backgroundColor: "#2563EB",
    height: "100%",
    borderRadius: 4,
  },
  minInvestment: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  gap: {
    gap: 12,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  agentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  agentImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  agentName: {
    fontWeight: "600",
    fontSize: 16,
  },
  agentTitle: {
    fontSize: 12,
    color: "#6B7280",
  },
  contactText: {
    fontSize: 14,
    marginBottom: 4,
  },
  secondaryButton: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 12,
  },
  secondaryButtonText: {
    fontWeight: "500",
    color: "#374151",
  },
});
