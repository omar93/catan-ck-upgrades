<script>
    import { onMount } from "svelte";

  export let num = 0
  export let color = ''

  let used = false
  let w = 300
  let h = 300

  let tileHeight, tileWidth

  $: h = tileHeight
  $: w = tileWidth

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
    <div class="click-wrapper" on:click={handleClick} bind:clientHeight={tileHeight} bind:clientWidth={tileWidth}>
      {#if !used}
        <img id="card" src="/images/{color}.png" alt="" style="height: {h*0.85}px; width:{w*0.85}px;" >
        <span style="font-size: {h*0.2}px;">{num}x</span>
      {:else}
        {#if num === 1}
        <div id="dice-wrapper">
          <img id="dice" src="/images/{num}.png" alt="">
          <img id="dice" src="/images/{num+1}.png" alt="">
        </div>
        {:else}
          <div id="dice-wrapper">
            <img id="dice" src="/images/{num+1}.png" alt="">
          </div>
        {/if}

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
    margin-top: 10%;
    margin-left: 50%;
    transform: translate(-50%, 10%);
    font-size: 1rem;
    position: absolute;
    font-family: sans-serif;
    background-color: white;
    border-radius: 1rem;
  }
  
  #card {
    height: 80px;
    object-fit: contain;
    position: absolute;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
  }

  #dice-wrapper {
    height: 60px;
    position: absolute;
    margin-top: 50%;
    margin-left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  #dice-wrapper > img {
    border-radius: .5rem;
  }
</style>