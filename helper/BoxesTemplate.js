import { StyleSheet, View } from "react-native";

export default function BoxesTemplate({ mode, stretch }) {
  return (
    <>{mode === "more" ? <MoreBoxes /> : <LessBoxes stretch={stretch} />}</>
  );
}

const MoreBoxes = () => (
  <>
    <View style={[styles.box, { backgroundColor: "#FF9F29" }]}></View>
    <View style={[styles.box, { backgroundColor: "#FFC900" }]}></View>
    <View style={[styles.box, { backgroundColor: "#EF2F88" }]}></View>
    <View style={[styles.box, { backgroundColor: "#F05454" }]}></View>
    <View style={[styles.box, { backgroundColor: "#041C32" }]}></View>
    <View style={[styles.box, { backgroundColor: "#EC255A" }]}></View>
    <View style={[styles.box, { backgroundColor: "#CD1818" }]}></View>
  </>
);

const LessBoxes = ({ stretch }) => (
  <>
    <View
      style={[
        styles.box,
        stretch && styles.stretchBox,
        { backgroundColor: "#FF9F29" },
      ]}
    ></View>
    <View style={[styles.box, { backgroundColor: "#FFC900" }]}></View>
    <View style={[styles.box, { backgroundColor: "#EF2F88" }]}></View>
  </>
);

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 80,
  },
  stretchBox: {
    width: "auto",
    minWidth: 50,
  },
});
