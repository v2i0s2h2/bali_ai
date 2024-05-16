<script lang="ts">
  import Ask from "$lib/Ask.svelte";
  import MessageCard from "$lib/MessageCard.svelte";
  import { runChat } from "$lib/gemini-api";
  import { inputStore } from "$lib/input.store";
  import { onMount, tick } from "svelte";

  let messagesContainer: any;
  onMount(() => {
    scrollToBottom();
  });
  async function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  ////////

  type MessagePart = {
    text: string;
  };
  type Message = {
    role: "user" | "model";
    parts: MessagePart[];
  };
  type ChatHistory = Message[];

  let chatHistory: ChatHistory = [];

  let userMessage: Message;
  let activate = false;

  async function creaNewChat() {
    const text = $inputStore;
    userMessage = {
      role: "user",
      parts: [{ text }],
    };
    activate = true;
    await tick(); // This is the one basically helped to  scroll correctly and render
    scrollToBottom();
    let modelResponse = await runChat(chatHistory, text);
    activate = false;
    chatHistory = chatHistory;
    await tick();
    scrollToBottom();
  }
</script>

<div class="flex flex-col h-screen pt-12 pb-40">
  <div class="flex-grow overflow-y-auto p-4" bind:this={messagesContainer}>
    <div class="space-y-4 flex flex-col items-center">
      {#each chatHistory as message, index}
        <MessageCard {message} />
      {/each}
      {#if activate}
        <div class="space-y-4 flex flex-col items-center w-full">
          <MessageCard message={userMessage} />
          <!-- <SkeltonMessge /> -->
        </div>
      {/if}
    </div>
  </div>

  <Ask onClick={creaNewChat} />
</div>
