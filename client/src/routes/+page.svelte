<script>
  import City from "./City.svelte"
</script>

<div id="wrapper">
  <City color={"yellow"}/>
  <City color={"blue"}/>
  <City color={"green"}/>
</div>

<style>
  :root {
    padding: 0px;
    margin: 0px;
  }
  #wrapper {
    display: flex;
    height: 100vh;
  }
</style>