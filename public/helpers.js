const wrapper = document.querySelector('#wrapper')

const updateAttribute = (tile, newValue) => {
  tile.setAttribute('clicked', newValue)
  tile.style = `background-image: url(${getImageUrl(tile)})`
}

const updateDB = (tile) => {  
  let color = tile.getAttribute('color')
  let number = tile.getAttribute('number')
  let dbValue = JSON.parse(localStorage.getItem(color+number))
  localStorage.setItem(color+number, !dbValue)
  updateAttribute(tile, !dbValue)
}

const createEventListener = (tile) => {
  tile.addEventListener('click', event => {
    updateDB(tile)
  })
}

const setClickedStatus = (tile) => {
  let color = tile.getAttribute('color')
  let number = tile.getAttribute('number')
  let dbEntry = JSON.parse(localStorage.getItem(color+number))
  tile.setAttribute('clicked', dbEntry)
}

const getImageUrl = (tile) => {
  
  let color = tile.getAttribute('color')
  let number = tile.getAttribute('number')

  if(tile.getAttribute('clicked') === "true") {
    return `/images/tiles/${color}/used/${color}_${number}_used.png`
  }

  if(tile.getAttribute('clicked') === "false") {
    return `/images/tiles/${color}/${color}_${number}.png`
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
    tile.style = `background-image: url(${getImageUrl(tile)})`
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