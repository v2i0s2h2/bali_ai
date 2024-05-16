<script lang="ts">
  import { GradientButton, Spinner } from "flowbite-svelte";

  import { Textarea } from "flowbite-svelte";
  import { inputStore } from "./input.store";
  import { tick } from "svelte";

  export let onClick;

  let value: string = "";
  $: inputStore.set(value);

  let startSpinner = false;
</script>

<div
  class="@apply fixed bottom-0 left-0 right-0 sm:p-4 z-50 lg:right-16 lg:left-16 xl:right-24 xl:left-24"
>
  <form class="md:px-24">
    <Textarea class="mb-4" placeholder="Write a prompt" bind:value>
      <div slot="footer" class="flex items-center justify-center">
        <GradientButton
          on:click={async () => {
            await tick();
            startSpinner = true;
            await onClick();
            startSpinner = false;
          }}
          color="tealToLime"
          type="submit"
          disabled={startSpinner}
        >
          {#if startSpinner}
            <Spinner class="me-3" size="4" />
            Loading ...
          {:else}
            Ask Baali
          {/if}
        </GradientButton>
      </div>
    </Textarea>
  </form>
</div>
