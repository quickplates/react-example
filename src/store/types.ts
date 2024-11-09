import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

type StoreState = {
  color: "red" | "green";
};

type StoreActions = {
  flipColor: () => void;
};

export type Store = StoreState & StoreActions;

export type StoreInitializer = StateCreator<Store, [["zustand/immer", never]]>;

export type StorePersistOptions = PersistOptions<Store>;
