const wrapper = document.querySelector('#wrapper')

const createEventListener = (tile) => {

}

const setClickedStatus = (tile) => {
  let db = JSON.parse(localStorage.getItem('status'))
  let currentTileStatus = db[tile.getAttribute('color')][tile.getAttribute('number')]
  tile.setAttribute('clicked', currentTileStatus)
}

const setImage = (tile) => {
  let color = tile.getAttribute('color')
  let number = tile.getAttribute('number')
  if(tile.getAttribute('clicked') === 'true') {
    tile.style = `background-image: url(/images/tiles/${color}/used/${color}_${number}_used.png)`
  }
  if(tile.getAttribute('clicked') === 'false') {
    tile.style = `background-image: url(/images/tiles/${color}/${color}_${number}.png)`
  }
}

const generateTiles = (board) => {

  const numbers = [1, 2, 3, 4, 5]
  const color = board.id

  numbers.forEach(number => {
    let tileName = `${color}_${number}`
    let tile = document.createElement('div')
    tile.classList.add('tile', `t${number}`)
    tile.id = tileName
    tile.setAttribute('color', color)
    tile.setAttribute('number', number)
    setClickedStatus(tile)
    createEventListener(tile)
    setImage(tile)
    board.appendChild(tile)
  })
}

export const generateBoards = () => {
  let colors = ['yellow', 'blue', 'green']

  colors.forEach(color => {
    let board = document.createElement('div')
    board.id = color
    board.classList.add('board')
    board.style = `background-image: url(/images/${color}.png)`
    generateTiles(board)
    wrapper.appendChild(board)
  })  
}

const getCurrentTileStatus = () => {
  localStorage.getItem('status')
}
