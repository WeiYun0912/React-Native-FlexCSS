import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import React, { useState } from "react";
import BoxesTemplate from "../helper/BoxesTemplate";

export default function JustifyContent() {
  const [justifyContent, setJustifyContent] = useState("flex-start");
  return (
    <Layout
      title="Justify Content"
      label="justifyContent"
      selectedValue={justifyContent}
      setSelectedValue={setJustifyContent}
      values={[
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ]}
    >
      <BoxesTemplate mode="less" />
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
  <View style={{ padding: 10, marginTop: 10 }}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue == value && styles.buttonSelected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue == value && styles.buttonSelectedText,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9CB4CC",
    height: 400,
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
    flexWrap: "wrap",
  },
});
