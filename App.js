import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import DeckList from "./components/DeckList"
import { white } from "./utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <DeckList />
        </View>
      </Provider>
    )
  }
}
