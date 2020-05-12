import { Message } from "./types/demo";

const initialState: Message = {
  user: "",
  message: "",
  timestamp: 1,
};

const demo = (state = initialState, action: any) => {
  switch (action.type) {
    case "get":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default demo;
