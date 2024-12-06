let boards = document.querySelectorAll('.board')

const getTiles = (board) => {
  return board.children
}

boards.forEach(board => {
  let tiles = getTiles(board)
  Array.from(tiles).forEach((tile, index) => {
    tile.style = `background-image: url('/images/tiles/${board.id}/${board.id}_${index+1}.png')`
    tile.addEventListener('click', () => {
      
      let clickedStatus = tile.getAttribute('clicked')

      if(clickedStatus === 'false') {
        tile.style = `background-image: url('/images/tiles/${board.id}/used/${board.id}_${index+1}_used.png')`
        tile.setAttribute("clicked", true)
      }
      
      if(clickedStatus === 'true') {
        tile.style = `background-image: url('/images/tiles/${board.id}/${board.id}_${index+1}.png')`
        tile.setAttribute("clicked", false)
      }
      
    })
  })
})


