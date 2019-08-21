import React from "react"
import {
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  View
} from "react-native"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  SafeAreaView
} from "react-navigation"
import Constants from "expo-constants"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import middleware from "./middleware"
import DeckList from "./components/DeckList"
import AddDeck from "./components/AddDeck"
import AddCard from "./components/AddCard"
import DeckDetails from "./components/DeckDetails"
import Quiz from "./components/Quiz"
import { purple, white } from "./utils/colors"
import { setLocalNotification } from "./utils/helpers"

const FlashCardsStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <SafeAreaView
      style={{ backgroundColor, height: Constants.statusBarHeight }}
    >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  )
}

const Tabs = createMaterialTopTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintcolor }) => (
          <MaterialIcons name="list" size={30} color={tintcolor} />
        )
      }
    },
    NewDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintcolor }) => (
          <Ionicons name="plus-square" size={30} color={tintcolor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      headerTitleStyle: { width: Dimensions.get("window").width }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      headerTitleStyle: { width: Dimensions.get("window").width }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      },
      headerTitleStyle: { width: Dimensions.get("window").width }
    }
  }
})

const MainContainer = createAppContainer(MainNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={styles.container}>
          <FlashCardsStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <MainContainer />
        </View>
      </Provider>
    )
  }
}
