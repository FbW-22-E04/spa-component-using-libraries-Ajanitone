import { createContext, useReducer } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "search":
        return {
          ...state,
          searchText: action.payload,
        };
      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
