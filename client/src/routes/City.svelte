<script>
  export let cityColor = 'yellow'
  import Tile from "./Tile.svelte";
  let backgroundColor = 'red'
  let metroBackgroundColor = 'red'
  let tiles = [5, 4, 3, 2, 1]
  let metropolis = [1, 2, 3]

  if(cityColor === 'yellow') {
    backgroundColor = '#EECC6A'
    metroBackgroundColor = '#D7AD47'
  }

  if(cityColor === 'blue') {
    backgroundColor = '#BACBDB'
    metroBackgroundColor = '#ACC7E2'
  }

  if(cityColor === 'green') {
    backgroundColor = '#E3DC8C'
    metroBackgroundColor = ''
  }
</script>

<div id="wrapper" style="background-image: url('/images/{cityColor}Board.png');">


    {#each tiles as num}
    <div id="id{num}" class="square" style="grid-area: id{num}; ">
      <Tile num={num} {cityColor}/>
    </div>
    {/each}
</div>

<style>
  #wrapper {
    display: grid;
    grid-template-areas: 
    ".  .    .  ."
    ".  id4 id5 ."
    ".  id3 .   ."
    ".  id2 id1 ."
    ".  .    .  .";
    grid-template-columns: 100px 1fr 1fr 100px;
    grid-template-rows: 80px 1fr 1fr 1fr 80px;
    height: 100%;
    background-size: 100%;
    background-size: cover;
  }

  #metro-wrapper {
    display: flex;
    justify-content: space-around;
    grid-area: metro;
  }
  .square {
    width: 90%;
    height: 90%;
    overflow: hidden;
    justify-self: center;
    align-self: center;
  }

</style>