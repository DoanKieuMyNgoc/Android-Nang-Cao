import React, { useState } from "react";
import {
  SafeAreaView, StyleSheet, View, Text,
  FlatList, Modal, TouchableOpacity, TextInput
} from "react-native"

const DATA = [
  { id: 1, text: "One" },
  { id: 2, text: "Two" },
  { id: 3, text: "Three" },
  { id: 4, text: "Four" },
  { id: 5, text: "Five" }

]
const App = () => {
  const [data, setData] = useState(DATA)

  const [isModalisible, setisModalisible] = useState(false)

  const [inputText, setinputText] = useState()

  const [edititem, seteditItem] = useState()

  const [isRender, setisRender] = useState(false)

  const onPressItem = (item) => {
    setisModalisible(true)
    setinputText(item.text)
    seteditItem(item.id)
  }
  const onPressSave = () => {
    const newData = DATA.map(item => {
      if (item.id == edititem) {
        item.text = inputText;
        return item
      }
      return item
    })
    setData(newData)
    setisModalisible(false)
    setisRender(!isRender)
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onPressItem(item)}>
        <Text style={styles.text}> {item.text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        extraData={isRender}
      />
      <Modal
        animationType="fade"
        visible={isModalisible}
        onRequestClose={() => setisModalisible(false)}
      >
        <View style={styles.modalview}>
          <Text style={styles.text}>Change Text: </Text>
          <TextInput style={styles.textInput}
            onChangeText={(text) => setinputText}
            defaultValue={inputText}
            editable={true}
            multilin={false}
            maxLength={200} />
          <TouchableOpacity style={styles.touchableSave}
            onPress={() => onPressSave()}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    alignItems: "flex-start"
  },
  text: {
    marginVertical: 30,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10
  },
  modalview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  touchableSave: {
    backgroundColor: "orange",
    paddingHorizontal: 100,
    alignItems: "center",
    marginTop: 20
  },
  textInput: {
    width: "90%",
    height: 70,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 25
  }
})

export default App;