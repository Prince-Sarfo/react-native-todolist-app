import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default Task = (props) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };
  return (
    <>
      <View style={styles.items}>
        <View style={styles.itemLeft}>
          <Pressable style={styles.square} onPress={() => handleCheck()}>
            {check && (
              <FontAwesome
                name="check"
                style={{ width: 12, height: 12, color: "#fff" }}
              />
            )}
          </Pressable>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#55bcf6",
    marginRight: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  fontIcon: { flex: 1, alignContent: "center", justifyContent: "center" },
  circular: {
    height: 12,
    width: 12,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#55bcf6",
  },
});
