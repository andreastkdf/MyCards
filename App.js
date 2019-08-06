import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import DeckList from "./components/DeckList"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={[styles.container, { flex: 1 }]}>
          <DeckList />
        </View>
      </Provider>
    )
  }
}
