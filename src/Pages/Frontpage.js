import { useReducer, useState } from "react";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  const [info, setInfo] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.name);
  return (
    <section>
      <div>
        <h1>contact page</h1>
      </div>
      <form>
        <input
          type="text"
          onInput={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
        <input type="email" />
        <input type="number" />
        <input type="url" />
      </form>
    </section>
  );
};
