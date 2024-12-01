let yellowParent = document.querySelector('#yellow')
let blueParent = document.querySelector('#blue')
let greenParent = document.querySelector('#green')

let parents = [yellowParent, blueParent, greenParent]

const createTile = (i, color, css) => {
  let text = i-1+"x"

  let tile = document.createElement('div')
  tile.classList.add(css)
  tile.addEventListener('click', flipTile)

  let resource = document.createElement('img')
  resource.style.backgroundImage = `url('./images/${color.id}.png')`
  resource.classList.add('img')

  let textNumber = document.createElement('span')
  textNumber.classList.add('text')
  textNumber.textContent = text

   
  tile.setAttribute('id', color.id+text)
  tile.appendChild(resource)
  tile.appendChild(textNumber)
  return tile
}

const createInfoTile = (i, color, css) => {
  let text = i-1+"x"

  let wrapper = document.createElement('div')
  wrapper.classList.add('korv')

  let tile = createTile(i, color, css)

  let info = document.createElement('div')
  info.classList.add('half-tile')


  wrapper.appendChild(tile)
  wrapper.appendChild(info)
  return wrapper
}

const createTiles = (tileParentId) => {

  for(let i = 6; i > 1; i--) {
    let text = i-1

    if (i === 4) {
      
      let info = createInfoTile(i, tileParentId, 'half-tile')
      tileParentId.appendChild(info)

    } else {
      let tile = createTile(i, tileParentId, 'tile')
      tileParentId.appendChild(tile)
    }
  }
  
}

const flipTile = (event) => {
  let tile = document.querySelector(`#${event.target.id}`)
  let text = tile.id.split('x')[0]
  let number = text[text.length-1]
  
  let img = tile.children[0]
  
  img.style.backgroundImage = `url('./images/${number}.png')`
  img.classList.toggle('dice')
  
  
  tile.classList.toggle('test')
}

parents.forEach(parent => {
  createTiles(parent)
})

