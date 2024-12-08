<script>
   const initializeLocalstorage = () => {
    
    if(!localStorage.getItem('status')) {
      let db = {}
      let colors = ['yellow', 'blue', 'green']
      let numbers = [1, 2, 3, 4, 5]

      for (let i = 0; i < colors.length; i++) {
        for (let j = 1; j < numbers.length+1; j++) {
          let tile = [colors[i]][numbers[j]]
          console.log(tile);
          db[tile] = false

        }
      }
      localStorage.setItem('status', db)
    }
  }

  initializeLocalstorage()
  import Board from "./Board.svelte"
  
  const colors = ['yellow', 'blue', 'green']

</script>

<div id="wrapper">
  {#each colors as color}
    <div id="inner-wrapper">
      <Board {color}/>
    </div>
  {/each}
</div>

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    /**TODO change this background color to an image to the same background as the board has*/
    background-color: black;
  }

  #wrapper {
    display: flex;
    background-image: url('/images/board.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  #inner-wrapper {
    height: 100vh;
    width: 100vw;
  }
</style>