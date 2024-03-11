import { StyleSheet } from "react-native";
import { COLORS } from "../utils/constant";

export const globalStyles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  flexCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  fab: {
    position: "absolute",
    backgroundColor: COLORS.black,

    margin: 16,
    right: 0,
    bottom: 0,
  },
});
