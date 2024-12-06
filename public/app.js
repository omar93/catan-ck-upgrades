import { generateBoards } from "./helpers.js"
// let boards = document.querySelectorAll('.board')

const InitializeLocalStorage = (reset) => {
  let status = localStorage.getItem('status');
  if (!status || reset) {
    localStorage.setItem('status', JSON.stringify({
      "yellow": { "1": "false", "2": "false", "3": "false", "4": "false", "5": "false" },
      "blue": { "1": "false", "2": "false", "3": "false", "4": "false", "5": "false" },
      "green": { "1": "false", "2": "false", "3": "false", "4": "false", "5": "false" }
    }));
  }
}  
InitializeLocalStorage()

generateBoards()

// const getTiles = (board) => {
//   return board.children
// }

// const getUrl = (color, index, click) => {
//   if(click === "false") {
//     return`/images/tiles/${color}/${color}_${index}.png`
//   } else {
//     return `/images/tiles/${color}/used/${color}_${index}_used.png`
//   }

// }



// const updateLocalStorage = (color, index, value) => {
  
//   let status = JSON.parse(localStorage.getItem('status'));

//   if (status && status[color] && status[color][index] !== undefined) {
//     status[color][index] = `${value}`;
//     localStorage.setItem('status', JSON.stringify(status));
//   } else {
//     console.error('Invalid color or index')
//   }
// }

// const setStatus = (color, index, tile) => {
//   let statusObject = JSON.parse(localStorage.getItem('status'))
//   let status = statusObject[color][index]  
//   tile.style = `
//   background-image: url(${getUrl(color, index, status)});
// `
// }

// boards.forEach(board => {
//   board.style = `background-image: url(/images/${board.id}.png`
//   let tiles = getTiles(board)


  
//   Array.from(tiles).forEach((tile, index) => {
    
//     const randomMarginLeft = Math.floor(Math.random() * 3)    
//     const randomMarginTop = Math.floor(Math.random() * 3)
//     const color = board.id

//     setStatus(color, index+1, tile)

//     tile.addEventListener('click', () => {
//       let clickedStatus = tile.getAttribute('clicked')
//       console.log("clicked", clickedStatus);
      
//       if(clickedStatus === 'false') {
//         tile.setAttribute("clicked", "true")
//         tile.style = `
//           background-image: url(${getUrl(color, index+1, !clickedStatus)});
//           margin-left: ${randomMarginLeft}px;
//           margin-top:  ${randomMarginTop}px;
//         `
//         updateLocalStorage(color, index+1, "true")
//       }
      
//       if(clickedStatus === 'true') {
//         console.log(" we win ");
        
//         tile.setAttribute("clicked", false)
//         tile.style = `
//           background-image: url(${getUrl(color, index+1, !clickedStatus)});
//           margin-left: ${randomMarginLeft}px;
//           margin-top:  ${randomMarginTop}px;
//         `
//         updateLocalStorage(color, index+1, "false")
//       }
      
//     })

//     tile.addEventListener('mousedown', () => {
//       // Start a timer when the mouse is pressed
//       holdTimeout = setTimeout(() => {
//         // Show a confirmation popup after 2 seconds
//         if (confirm('You held for 2 seconds. Click OK to proceed.')) {
//           console.log('Action confirmed!');
//           InitializeLocalStorage(true)
//           // Perform your action here
//         }
//       }, 2000); // 2000ms = 2 seconds
//     });
//   })
// })




