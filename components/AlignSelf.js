import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import BoxesTemplate from "../helper/BoxesTemplate";
import { Target } from "@nandorojo/anchor";

export default function AlignSelf() {
  const [alignSelf, setalignSelf] = useState("stretch");
  return (
    <Target name="AlignSelf">
      <Layout
        title="Align Self"
        label="alignSelf"
        selectedValue={alignSelf}
        setSelectedValue={setalignSelf}
        values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      >
        <BoxesTemplate
          mode="less"
          stretch={true}
          alignSelf={alignSelf}
          isAlignSelf={true}
        />
      </Layout>
    </Target>
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
    <View style={styles.container}>{children}</View>
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
