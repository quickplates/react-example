import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

type StoreState = {
  color: "green" | "red";
};

type StoreActions = {
  flipColor: () => void;
};

export type Store = StoreActions & StoreState;

export type StoreInitializer = StateCreator<Store, [["zustand/immer", never]]>;

export type StorePersistOptions = PersistOptions<Store>;
