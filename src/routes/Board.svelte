<script>
  import { catanStore } from "$lib/store"
  import Tile from "./Tile.svelte"

  export let color = 'yellow'

  const db = catanStore()
  db.initializeStorage()
  
  let status = []

  db.subscribe(value => {
    status = value
  })

  const updateDB = (event) => {
    const { color, number, used } = event.detail
    db.change(color, number, used)
  }

  let tiles = [5, 4, 3, 2, 1]

</script>

<div id="wrapper">
  {#each tiles as number, index}
    <div id="id{number}" class="square" style="grid-area: id{number}; ">
      <Tile {number} {color} used={status[color + number]} on:changeStatus={updateDB}/>
    </div>
  {/each}
</div>

<style>
  #wrapper {
    height: 100%;
    display: grid;
    grid-template-areas: 
    ".  .   .  .  ."
    ".  id4 . id5 ."
    ".  .   .  .  ."
    ".  id3 . .   ."
    ".  .   .  .  ."
    ".  id2 . id1 ."
    ".  .   .  .  .";
    grid-template-columns: 15% 1fr 7.5% 1fr 15%;
    grid-template-rows: 10% 1fr 2.5% 1fr 2.5% 1fr 10%;
    align-items: center;
    justify-items: center;
  }

  .square {
    width: 100%;
    height: 100%;
    min-height: 1%;
  }

</style>