import { StyleSheet, View } from "react-native";

export default function BoxesTemplate({
  mode,
  stretch,
  alignSelf,
  isAlignSelf,
}) {
  return (
    <>
      {mode === "more" ? (
        <MoreBoxes />
      ) : (
        <LessBoxes
          stretch={stretch}
          alignSelf={alignSelf}
          isAlignSelf={isAlignSelf}
        />
      )}
    </>
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

const LessBoxes = ({ stretch, alignSelf, isAlignSelf }) => (
  <>
    <View
      style={[
        styles.box,
        stretch && styles.stretchBox,
        isAlignSelf && { ["alignSelf"]: alignSelf },
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
