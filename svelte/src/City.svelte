<script>
  export let color = 'yellow'
  import Tile from "./Tile.svelte";
  let arr = [5, 4, 3, 0, 2, 1]
</script>

<div id="wrapper">
  <div id="metro-wrapper">
    <img src="/images/metropol.png" alt="">
    <img src="/images/metropol.png" alt="">
  </div>
  {#each arr as num}
    <div id="id{num}" class="square" style="grid-area: id{num};">
      <Tile num={num} {color}/>
    </div>
  {/each}
</div>

<style>
  #wrapper {
    width: calc(100%/3);
    display: grid;
    grid-template-areas: 
    "metro metro"
    "id4 id5"
    "id3 id0"
    "id2 id1";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 25px 1fr 1fr 1fr;
  }

  #metro-wrapper {
    display: flex;
    justify-content: space-around;
    grid-area: metro;
    background-color: black;
  }

  img {
    height: 25px;
  }
  .square {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 1px solid rgb(43, 41, 43)
  }
</style>