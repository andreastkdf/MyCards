import { AsyncStorage } from "react-native"
import { Notifications } from "expo"
import { askAsync, NOTIFICATIONS } from "expo-permissions"

const NOTIFICATION_KEY = "MyFlashCards:notifications"

export const getDailyReminderValue = () => {
  return {
    today: "👋🏻 Don't forget to take a quiz today!"
  }
}

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  )
}

const createNotification = () => {
  return {
    title: "Take a quiz",
    body: "👋🏻 Don't forget to take a quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  }
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        askAsync(NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(10)
            tomorrow.setMinutes(30)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "minute"
            })

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}
