import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Tasks from "./components/Tasks";


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  // function to handle adding task
  handleAddTask = () => {
    Keyboard.dismiss;
    if (task !== null) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    } else {
      alert("task cannot be empty");
    }
  };

  // function to delete a task
  const completeTask = (index) => {
    let copyTask = [...taskItems];
    copyTask.splice(index, 1);
    setTaskItems(copyTask);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
      
        <ScrollView>
          <View style={styles.taskWrapper}>
            <View>
              <Text style={styles.sectionTitle}>Today's Task</Text>
            </View>

            <View style={styles.items}>
              {taskItems.map((item, index) => {
                return (
                  <Pressable key={index} onPress={() => completeTask(index)}>
                    <Tasks text={item} />
                  </Pressable>
                );
              })}
            </View>
          </View>
          
        </ScrollView>

        {/* write some task */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTextWrapper}
        >
          <TextInput
            placeholder="type your task here"
            style={styles.input}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <Pressable onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Image
                source={require("../assets/svg/plus-solid.svg")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </Pressable>
        </KeyboardAvoidingView>
          <StatusBar style={{backgroundColor: 'blue'}} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebeaed",
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    paddingTop: 20,
  },
  writeTextWrapper: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: "#c0c0c0",
    backgroundColor: "#fff",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
