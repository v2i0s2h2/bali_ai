<script lang="ts">
  import { GradientButton, Spinner } from "flowbite-svelte";

  import { Textarea } from "flowbite-svelte";
  import { inputStore } from "./input.store";
  import { tick } from "svelte";

  export let onClick: () => Promise<void>;

  let value: string = "";
  $: inputStore.set(value);
  $: buttonDisable = value.length === 0;
  let startSpinner = false;

  function handleInputChange() {
    blockButtonIfInputIsEmpty();
  }
  function blockButtonIfInputIsEmpty() {
    buttonDisable = value.trim().length === 0;
  }
  async function handleFormSubmit() {
    await tick();
    startSpinner = true;
    value = "";
    buttonDisable = true;
    await onClick();
    startSpinner = false;
  }
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && !buttonDisable) {
      event.preventDefault();
      handleFormSubmit();
    }
  }
</script>

<div
  class="@apply fixed bottom-0 left-0 right-0 sm:p-4 z-50 lg:right-16 lg:left-16 xl:right-24 xl:left-24"
>
  <form class="md:px-24">
    <Textarea
      class="mb-4"
      placeholder="Write a prompt"
      on:input={handleInputChange}
      on:keydown={handleKeyDown}
      bind:value
    >
      <div slot="footer" class="flex items-center justify-center">
        <GradientButton
          on:click={handleFormSubmit}
          color="tealToLime"
          type="submit"
          disabled={buttonDisable}
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
