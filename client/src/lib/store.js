import { writable } from "svelte/store"
import { browser } from "$app/environment"

export const catanStore = () => {
  const { subscribe, set, update } = writable({})

  const change = (color, number, status) => {
    if (browser) {
      let currentStorage = JSON.parse(localStorage.getItem("status")) || {}
      currentStorage[color+number] = `${status}`
      set(currentStorage)
      localStorage.setItem("status", JSON.stringify(currentStorage))
    }
  }

  const initializeStorage = () => {
    if (browser) {
      const colors = ["yellow", "blue", "green"];
      const localStorageDB = {}
      if (!localStorage.getItem("status")) {
        colors.forEach((color) => {
          for (let number = 1; number <= 5; number++) {
            localStorageDB[color+number] = "false"
          }
        });
        localStorage.setItem("status", JSON.stringify(localStorageDB))
      }
      set(JSON.parse(localStorage.getItem("status")))
    }
  }

  const getInitialData = () => {
    if(browser) {
      let data = JSON.parse(localStorage.getItem("status"))
      set(data)
      return data
    }
  }

  return {
    subscribe,
    initializeStorage,
    change,
  }
}
