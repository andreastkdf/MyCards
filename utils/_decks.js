import { AsyncStorage } from "react-native"
import { materialColor } from "./colors"

export const DECKS_STORAGE_KEY = "MyCards:decks"

export const setDummyData = () => {
  const dummyData = {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ],
      color: materialColor()
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ],
      color: materialColor()
    },
    Web: {
      title: "Web",
      questions: [
        {
          question: "What is Drupal?",
          answer: "A Content Management System"
        }
      ],
      color: materialColor()
    }
  }
  AsyncStorage.removeItem(DECKS_STORAGE_KEY)
    .catch(error => console.warn("error", error))
    .then(() => {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
    })

  return dummyData
}
