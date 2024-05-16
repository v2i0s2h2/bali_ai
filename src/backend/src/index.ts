import {
  query,
  update,
  text,
  Record,
  StableBTreeMap,
  Variant,
  Vec,
  None,
  Some,
  Ok,
  Err,
  ic,
  Principal,
  Opt,
  nat64,
  Duration,
  Result,
  bool,
  Canister,
  init,
  Void,
  nat,
} from "azle";
import { v4 as uuidv4 } from "uuid";

const UserId = text;
const userRegistry = StableBTreeMap(10, Principal, UserId);

export default Canister({
  greet: query([text], text, (name) => {
    return `Hello, ${name}!`;
  }),

  register: update([], UserId, () => {
    const useId = uuidv4();
    userRegistry.insert(ic.caller(), useId);
    return useId;
  }),
  get_user: query(
    [],
    Record({ principal: Principal, user_id: Opt(UserId) }),
    () => {
      const user_id = userRegistry.get(ic.caller());

      return { principal: ic.caller(), user_id };
    }
  ),
});
