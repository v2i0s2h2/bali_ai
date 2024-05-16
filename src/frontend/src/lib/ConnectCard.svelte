<script>
  import { Card, Button } from "flowbite-svelte";
  import { GradientButton } from "flowbite-svelte";
  //   import { ArrowRightOutline } from "flowbite-svelte-icons";

  import { authStore } from "./auth.store";

  //   $: isAuthenticated = $authStore.isAuthenticated;

  const login = async () => {
    await authStore.signIn();
  };
</script>

<div class="flex justify-center h-[100vh] items-center">
  <Card size="lg" class="dark:bg-gray-500">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Bali AI
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      Experience Bali like never before. Personalized recommendations, seamless
      travel planning, and cultural insights - all powered by AI.
    </p>

    <GradientButton
      color="tealToLime"
      class="primary w-fit"
      on:click={() => login()}
      >LOGIN <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"
        />
      </svg></GradientButton
    >
  </Card>
</div>
