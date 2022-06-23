import { View, Text } from "react-native";
import React from "react";
import BoxTemplate from "../helper/BoxTemplate";

export default function Flex() {
  return (
    <Layout
      title="Flex"
      label="flex"
      selectedValue={flexWrap}
      setSelectedValue={setFlexWrap}
      values={["wrap", "nowrap"]}
    >
      <BoxTemplate />
    </Layout>
  );
}

const Layout = ({
  title,
  children,
  label,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9CB4CC",
    maxHeight: 500,
    padding: 10,
  },
  box: {
    width: 50,
    height: 80,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  button: {
    backgroundColor: "#FAEEE7",
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: "1%",
    borderRadius: 4,
    marginBottom: 6,
    minWidth: "48%",
  },
  buttonSelected: {
    backgroundColor: "#019267",
  },
  buttonSelectedText: {
    color: "#fff",
  },
  buttonLabel: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFCBCB",
    // color :
  },
  row: {
    flexDirection: "row",
  },
});
