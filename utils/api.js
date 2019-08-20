import { AsyncStorage } from "react-native"
import { setDummyData, DECKS_STORAGE_KEY } from "./_decks"

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? setDummyData() : JSON.parse(results)
    // return setDummyData()
  })
}

export const getDeck = id => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    const data = JSON.parse(results)
    return data[id]
  })
}

export const submitDeck = ({ title, id }) => {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [id]: title
    })
  )
}

// TODO: Add call to addCardToDeck
