<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

  type MessagePart = {
    text: string;
  };

  type Message = {
    role: "user" | "model";
    parts: MessagePart[];
  };

  export let message: Message = {
    role: "model",
    parts: [
      {
        text: "Hi how are you, By incorporating these elements, you can create a compelling landing page that effectively positions Bali AI as the ultimate travel companion for your dream Bali vacation.",
      },
    ],
  };

  const formattedResponseWithNewlines = message.parts[0].text
    .replace(/_\*_/g, "<i>")
    .replace(/_\*_/g, "</i>")
    .replace(/\*\*/g, "<b>")
    .replace(/\*\*/g, "</b>")
    .replace(/\n/g, "<br>");
</script>

<Card
  size="lg"
  class={message.role === "user" ? "bg-lime-200" : "bg-primary-200"}
>
  <h5
    class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
  >
    {message.role === "user" ? "You" : "Baali AI"}
  </h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {@html formattedResponseWithNewlines}
  </p>
</Card>
