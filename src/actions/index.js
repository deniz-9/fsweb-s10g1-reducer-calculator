export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}


export const CLEAR_DISPLAY = "CLEAR_DISPLAY";


export const MEMORY_ADD = "MEMORY_ADD";
export const MR_ADD = "MR_ADD";
export const MC_ZERO = "MC_ZERO";


export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};
export const mrAdd = () => {
  return { type: MR_ADD };
};

export const mcZero = () => {
  return { type: MC_ZERO };
};