export type State = {
  color: "red" | "green";
};

export type Actions = {
  flipColor: () => void;
};

export type Store = State & Actions;
