import { useReducer, useState } from "react";
import {
  StyledDiv,
  StyledForm,
  StyledImage,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";
import biznizcard from "../image/biznizcard.webp";

export const Frontpage = () => {
  const [info, setInfo] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const submitInfo = (e) => {
    e.preventDefault();
    setInfo([
      {
        name: state.name,
        email: state.email,
        number: state.number,
        url: state.url,
      },
    ]);
  };
  console.log(info);
  return (
    <>
      <header>
        <h1>contact page</h1>
      </header>
      <StyledSection>
        <StyledDiv>
          <StyledImage src={biznizcard} />
          <div>
            <h2>name</h2>
            <h2>number</h2>
            <h2>email</h2>
          </div>
        </StyledDiv>
        <StyledForm onSubmit={submitInfo}>
          <input
            type="text"
            onInput={(e) => dispatch({ type: "name", payload: e.target.value })}
          />
          <input
            type="text"
            onInput={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
          <input
            type="text"
            onInput={(e) =>
              dispatch({ type: "number", payload: e.target.value })
            }
          />
          <input
            type="text"
            onInput={(e) => dispatch({ type: "url", payload: e.target.value })}
          />
          <input
            type="file"
            onInput={(e) => dispatch({ type: "url", payload: e.target.value })}
          />
          <input type="submit" hidden />
        </StyledForm>
      </StyledSection>
    </>
  );
};
