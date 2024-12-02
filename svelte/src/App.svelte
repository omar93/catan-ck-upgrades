<script>
  import City from "./City.svelte"
</script>

<div id="wrapper">
  <City color={"yellow"}/>
  <City color={"blue"}/>
  <City color={"green"}/>
</div>

<style>
  #wrapper {
    display: flex;
    height: 100vh;
  }
</style>