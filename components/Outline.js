import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useScrollTo } from "@nandorojo/anchor";

export default function Outline() {
  const { scrollTo } = useScrollTo();
  return (
    <View style={{ marginTop: 25, padding: 10 }}>
      <Text style={styles.outlineText}>Choose One You Wanna Try !!</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            scrollTo("FlexWrap");
          }}
        >
          <Text style={styles.buttonLabel}>Flex Wrap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            scrollTo("JustifyContent");
          }}
        >
          <Text style={styles.buttonLabel}>Justify Content</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            scrollTo("AlignItems");
          }}
        >
          <Text style={styles.buttonLabel}>Align Items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            scrollTo("AlignContent");
          }}
        >
          <Text style={styles.buttonLabel}>Align Content</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            scrollTo("AlignSelf");
          }}
        >
          <Text style={styles.buttonLabel}>Align Self</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outlineText: {
    textAlign: "center",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#F0A500",
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: "1%",
    borderRadius: 4,
    marginBottom: 6,
    minWidth: "48%",
  },
  buttonLabel: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    // color :
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
