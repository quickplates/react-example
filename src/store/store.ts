import { shared, SharedOptions } from "use-broadcast-ts";
import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  stateSyncChannel as stateBroadcastChannel,
  stateStorageKey,
} from "../constants";
import { Store } from "./store.types";

type Initializer = StateCreator<Store, [["zustand/immer", never]]>;

const initializer: Initializer = (set) => ({
  color: "red",
  flipColor: () =>
    set((state) => {
      state.color = state.color === "red" ? "green" : "red";
    }),
});

const persistOptions: PersistOptions<Store> = {
  name: stateStorageKey,
};

const sharedOptions: SharedOptions = {
  name: stateBroadcastChannel,
};

export const useStore = create<Store>()(
  shared(persist(immer(initializer), persistOptions), sharedOptions)
);
