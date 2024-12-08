<script>  
  export let number = 0
  export let color = ''

  let used = false

  const handleClick = () => used = !used
  
</script>


{#if !used}
  <button id="card" aria-label="city" on:click={handleClick} class="picture" style="background-image: url(/images/tiles/{color}/{color}_{number}.png)" alt="city-upgrade"></button>
{:else}
  <button id="dice" aria-label="korv" on:click={handleClick} class="picture" style="background-image: url(images/tiles/{color}/used/{color}_{number}_used.png" alt="city-upgrade"></button>
{/if}

<style>
  button {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
  }
</style>