import { v4 as uuidV4 } from "uuid";
import { atom } from "recoil";

export const newEditState = atom({
  key: uuidV4(),
  default: ""
});

export const newDateState = atom({
  key: uuidV4(),
  default: ""
});

export const inputState = atom({
  key: uuidV4(),
  default: ""
});

export const newTodoState = atom({
  key:uuidV4(),
  default: ""
});

export const toDosState = atom({
  key: uuidV4(),
  default: [],
});
