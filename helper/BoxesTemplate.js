import { StyleSheet, View } from "react-native";

export default function BoxesTemplate({ mode }) {
  return <>{mode === "more" ? <MoreBoxes /> : <LessBoxes />}</>;
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

const LessBoxes = () => (
  <>
    <View style={[styles.box, { backgroundColor: "#FF9F29" }]}></View>
    <View style={[styles.box, { backgroundColor: "#FFC900" }]}></View>
    <View style={[styles.box, { backgroundColor: "#EF2F88" }]}></View>
  </>
);

const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 80,
  },
});
