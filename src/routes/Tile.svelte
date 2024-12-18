<script>
  import { createEventDispatcher } from 'svelte'

  export let number = 0
  export let color = ''
  export let used = 'false'

  let audio = ''

  const dispatch = createEventDispatcher()

  const handleClick = () => {
    audio.play()
    used = used === 'false' ? 'true' : 'false'
    dispatch('changeStatus', { color, number, used })
  }
</script>

<audio src="/sounds/flip2.mp3" bind:this={audio}></audio>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card-container" on:click={handleClick}>
  <div class="card {used === 'true' ? 'flipped' : ''}">
    <div class="card-front">
      <img
        class="picture"
        src="/images/tiles/{color}/{color}_{number}.png"
        alt="city-upgrade"
      />
    </div>
    <div class="card-back">
      <img
        class="picture"
        src="/images/tiles/{color}/used/{color}_{number}_used.png"
        alt="city-upgrade"
      />
    </div>
  </div>
</div>

<style>
  .card-container {
    perspective: 1000px;
    width: 100%;
    height: 100%;
  }

  .card {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    z-index: 2;
  }

  .card-back {
    transform: rotateY(180deg);
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
