import { generateBoards } from "./helpers.js"
const InitializeLocalStorage = (reset) => {
  let colors = ['yellow', 'blue', 'green']
  let numbers = [1, 2, 3, 4, 5]
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const item = colors[i]+numbers[j]
      if(!localStorage.getItem(item)) {
        localStorage.setItem(item, false)
      }
    }
  }
}  
InitializeLocalStorage()
generateBoards()