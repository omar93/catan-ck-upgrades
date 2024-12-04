<script>
    import { onMount } from "svelte";

  export let num = 0
  export let cityColor = ''

  let used = false
  let w = 300
  let h = 300

  let tileHeight, tileWidth

  $: h = tileHeight
  $: w = tileWidth

  let bg = ''


  const handleClick = () => used = !used
  
</script>

<div id="tile-wrapper"  style="background-color:{"white"}">
  {#if num === 0}
    <img id="info" src="/images/{cityColor}Info.png" alt="">
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  {:else}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="click-wrapper" on:click={handleClick} bind:clientHeight={tileHeight} bind:clientWidth={tileWidth}>
      {#if !used}
        <img id="card" class="picture" src="/images/tiles/{cityColor}/{cityColor}_{num}.png" alt="">
      {:else}
        <div id="dice-wrapper">
          <img id="dice" class="picture" src="/images/tiles/{cityColor}/used/{cityColor}_{num}_used.png" alt="">
        </div>
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
    padding: 1rem;
  }

  .click-wrapper {
    width: 100%;
    height: 100%;
  }

  .picture {
    width: 285px;
    position: absolute;
    top: 0px;
    left: 0px;
  }

</style>