<script>
  import { catanStore } from "$lib/store"
  import Board from "./Board.svelte"
  
  const store = catanStore()
  store.initializeStorage()
  
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