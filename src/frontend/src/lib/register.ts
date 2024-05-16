import { get } from "svelte/store";
import { authStore } from "./auth.store";
import type { Principal } from "@dfinity/principal";

type user_id = [] | [string];
type Res = { principal: Principal; user_id: user_id };

export async function registerThisUser() {
  const response: Res = await get(authStore).actor.get_user();

  if (typeof response.user_id === typeof []) {
    const user_id = await get(authStore).actor.register();
  }
}
