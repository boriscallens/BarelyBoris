<script lang="ts">
  import { writable } from "svelte/store";
  import { tweened } from 'svelte/motion';

  let cupVolume = writable(350); // initial cup volume
  let steps: any[];

  $: beanWeight = ($cupVolume / 17);

  // 0m00s:         pour    : Pour 50g of water to bloom
  // 0m10s - 0m15s: swirl   : Gently Swirl
  // 0m00s - 0m45s: bloom   : Bloom
  // 0m45s - 1m00s: add-1   : Pour up to 100g total (40% total weight)
  // 1m00s - 1m10s: drain-1 : Pause
  // 1m10s - 1m20s: add-2   : Pour up to 150g total (60% total weight)
  // 1m20s - 1m30s: drain-2 : Pause
  // 1m30s - 1m40s: pour-3  : Pour up to 200g total (80% total weight)
  // 1m40s - 1m50s: drain-3 : Pause
  // 1m50s - 2m00s: pour-4  : Pour up to 250g total (100% total weight)
  // 2m00s - 2m05s: swirl-2 : Gently swirl
  // 2m05s - 3m00s: drain-4 : Final drawdown

  $: steps = [
    { code: "pour", timer: 10, verb: "Pour", label: "50g of water" },
    { code: "swirl", timer: 5, verb: "Swirl", label: "gently" },
    { code: "bloom", timer: 45, verb: "Bloom", label: "" },
    {
      code: "add-1",
      timer: 15,
      verb: "Pour",
      label: `up to ${($cupVolume * 0.4).toFixed(0)}g total (40% total weight)`,
    },
    { code: "drain-1", timer: 10, verb: "Rest", label: "" },
    {
      code: "add-2",
      timer: 10,
      verb: "Pour",
      label: `up to ${($cupVolume * 0.6).toFixed(0)}g total (60% total weight)`,
    },
    { code: "drain-2", timer: 10, verb: "Rest", label: "" },
    {
      code: "pour-3",
      timer: 10,
      verb: "Pour",
      label: `up to ${($cupVolume * 0.8).toFixed(0)}g total (80% total weight)`,
    },
    { code: "drain-3", timer: 10, verb: "Rest", label: "" },
    {
      code: "pour-4",
      timer: 10,
      verb: "Pour",
      label: `up to ${$cupVolume.toFixed(0)}g total (fill the cup)`,
    },
    { code: "swirl-2", timer: 5, verb: "Swirl", label: "gently" },
    {
      code: "drain-4",
      timer: 55,
      verb: "Drain",
      label: "until everything is gone",
    },
  ];

  let currentTimerCode = writable("");
  let remainingSeconds = writable(0);
  let finishedStepCodes = writable<string[]>([]);

  let timer: number = 0;

  function startTimer(stepCode: string) {
    let step = steps.find((s) => s.code === stepCode);
    if (!step) {
      console.error(`No step found with code ${stepCode}`);
      return;
    }

    currentTimerCode.set(stepCode);
    remainingSeconds.set(step.timer);

    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(() => {
      remainingSeconds.update((n) => {
        if (n <= 1) {
          clearInterval(timer);
          finishedStepCodes.update((codes) =>{
            console.debug(`Finished step ${stepCode}`,  [...codes, stepCode]);
            return [...codes, stepCode]
          });
          return 0;
        } else {
          return n - 1;
        }
      });
    }, 1000);
  }
</script>

<h1>Beancounter</h1>
<h3>A simple tool to make your coffee brewing unnecesseraly complicated.</h3>
<p>
  Based on James Hoffmann's
  <a href="https://www.youtube.com/watch?v=1oB1oDrDkHM">A Better 1 Cup V60 Technique</a>
</p>

<form>
  <label for="cup-volume">Enter your cup volume (in ml):</label>
  <input type="number" bind:value={$cupVolume} min="200" max="500" step="50" />
  <span>and <strong>{beanWeight.toFixed(0)}</strong> g off lightly roasted beans</span>
</form>

<ol>
  {#each steps as step, i}
    <li>
      {#if $finishedStepCodes.findIndex((code) => code === step.code) === -1}
        <button
          class="button-with-progress"
          on:click={() => startTimer(step.code)}
        >
          <span class="button-text"
            >{step.verb}{$currentTimerCode === step.code ? "ing" : ""}</span
          >
          {#if $currentTimerCode === step.code && $remainingSeconds > 0}
            <div
              class="progress-bar"
              style="height: {100 - (100 * $remainingSeconds) / step.timer}%"
            ></div>
          {/if}
        </button>
        {step.label}
        {step.timer}s
      {:else}
        <span class="finished-step"
          >{step.verb}ed</span
        >
        {step.label}
      {/if}
    </li>
  {/each}
</ol>

<style>
  .button-with-progress,
  .finished-step {
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  .button-text,
  .finished-step {
    transition: transform 0.3s ease;
  }

  .finished-step {
    transform: scale(1.2);
  }

  .button-with-progress {
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .button-text {
    position: relative;
    z-index: 2;
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--brand-light);
    transition: height 0.1s linear;
  }
  button {
    width: 100px;
  }
  input[type="number"] {
    width: 8ch;
  }
</style>
