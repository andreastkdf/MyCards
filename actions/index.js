export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"
export const ADD_CARD = "ADD_CARD"

// Receive decks action creator
export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

// Add deck action creator
export const addDeck = ({ title, color }) => {
  return {
    type: ADD_DECK,
    title,
    color
  }
}

// Add card to deck action creator
export const addCard = (card, deckTitle) => {
  return {
    type: ADD_CARD,
    card,
    deckTitle
  }
}
