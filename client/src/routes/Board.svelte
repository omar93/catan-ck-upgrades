<script>
  export let color = 'yellow'

  import Tile from "./Tile.svelte"
  
  let tiles = [5, 4, 3, 2, 1]

</script>

<div id="wrapper">
  {#each tiles as number}
    <div id="id{number}" class="square" style="grid-area: id{number}; ">
      <Tile {number} {color}/>
    </div>
  {/each}
</div>

<style>
  #wrapper {
    height: 100%;
    display: grid;
    grid-template-areas: 
    ".  .    .  ."
    ".  id4 id5 ."
    ".  id3 .   ."
    ".  id2 id1 ."
    ".  .    .  .";
    grid-template-columns: 15% 1fr 1fr 10%;
    grid-template-rows: 12.5% 1fr 1fr 1fr 7%;
  }
  
  .square {
    width: 85%;
    height: 85%;
  }

</style>