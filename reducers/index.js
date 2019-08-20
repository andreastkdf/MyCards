import { RECEIVE_DECKS, ADD_DECK } from "../actions/index"

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      const { title, color } = action
      let decks = {}

      decks = {
        ...state,
        [title]: {
          title: title,
          color: color,
          questions: []
        }
      }

      return {
        ...state,
        ...decks
      }
    default:
      return state
  }
}

export default decks
