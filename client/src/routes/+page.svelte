<script>
  import City from "./City.svelte"
  const colors = ['yellow', 'blue', 'green']
</script>

<div id="wrapper">
  {#each colors as cityColor}
    <div id="inner-wrapper" style="background-color{cityColor}">
      <City {cityColor}/>
    </div>
  {/each}
</div>

<style>
  :root {
    padding: 0px;
    margin: 0px;
  }
  #wrapper {
    display: flex;
  }
  #inner-wrapper {
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
</style>