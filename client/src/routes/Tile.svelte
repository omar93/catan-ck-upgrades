<script>
  import { createEventDispatcher } from 'svelte'

  export let number = 0
  export let color = ''
  export let used = 'false'

  const dispatch = createEventDispatcher()
  

  const handleClick = () => {
    if(used === 'false') {
      used = 'true'
    }
    else if(used === 'true') {
      used = 'false'
    }
    dispatch('changeStatus', {color, number, used})
  }

  
</script>


{#if used === 'false'}
  <img id="card" aria-label="city" on:click={handleClick} class="picture" src="/images/tiles/{color}/{color}_{number}.png" alt="city-upgrade"/>
{:else}
  <img id="dice" aria-label="korv" on:click={handleClick} class="picture" src="images/tiles/{color}/used/{color}_{number}_used.png" alt="city-upgrade"/>
{/if}

<style>
  img {
    width: 100%;
    height: 100%;
  }
</style>