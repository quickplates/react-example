import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export type Store = StoreActions & StoreState;

export type StoreInitializer = StateCreator<Store, [["zustand/immer", never]]>;

export type StorePersistOptions = PersistOptions<Store>;

type StoreActions = {
  flipColor: () => void;
};

type StoreState = {
  color: "green" | "red";
};
