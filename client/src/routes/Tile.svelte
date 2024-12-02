<script>
  export let num = 0
  export let color = ''
  let used = false

  let bg = ''

  if(color === 'yellow') {
    bg = '#d4eb42'
  }

  if(color === 'blue') {
    bg = '#3059b3'
  }

  if(color === 'green') {
    bg = '#4beb50'
  }

  const handleClick = () => used = !used
  
</script>

<div id="tile-wrapper"  style="background-color:{bg}">
  {#if num === 0}
    <img id="info" src="/images/{color}Info.png" alt="">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  {:else}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="click-wrapper" on:click={handleClick}>
      {#if !used}
        <img id="card" src="/images/{color}.png" alt="">
        <span>{num}x</span>
      {:else}
        <img id="dice" src="/images/{num}.png" alt="">
      {/if}
    </div>
  {/if}
</div>

<style>
  #tile-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
  }

  .click-wrapper {
    width: 100%;
    height: 100%;
  }

  #info {
    margin-top: 10%;
    padding: 1rem;
  }

  span {
    margin-top: 33%;
    margin-left: 5px;
    font-size: 1.75rem;
    position: absolute;
    color: black;
    font-family: sans-serif;
  }
  
  #card {
    height: 80px;
    object-fit: contain;
    position: absolute;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
  }

  #dice {
    height: 50px;
    position: absolute;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
  }
</style>