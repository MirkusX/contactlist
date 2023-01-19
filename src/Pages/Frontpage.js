import { createRef, useReducer, useRef, useState } from "react";
import {
  ContactContainer,
  StyledDiv,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";
import biznizcard from "../image/biznizcard.webp";

export const Frontpage = () => {
  const [info, setInfo] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state.url);
  const form = useRef();
  const submitInfo = (e) => {
    e.preventDefault();
    setInfo([
      ...info,
      {
        name: state.name,
        email: state.email,
        number: state.number,
        url: state.url,
      },
    ]);
    form.current.reset();
    console.log(info);
  };

  return (
    <>
      <header>
        <h1>contact page</h1>
      </header>
      <StyledSection>
        <ContactContainer>
          {info.map((item, index) => {
            return (
              <StyledDiv>
                <StyledImage src={item.url} />
                <StyledDiv inner>
                  <h2>{item.name}</h2>
                  <h2>{item.number}</h2>
                  <h2>{item.email}</h2>
                </StyledDiv>
              </StyledDiv>
            );
          })}
        </ContactContainer>
        <StyledForm ref={form} onSubmit={submitInfo}>
          <h2>Create Contact</h2>
          <label>Name</label>
          <StyledInput
            type="text"
            onInput={(e) => dispatch({ type: "name", payload: e.target.value })}
            placeholder="Enter name..."
          />
          <label>E-Mail</label>
          <StyledInput
            type="text"
            onInput={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            placeholder="Enter email..."
          />
          <label>Phone Number</label>
          <StyledInput
            type="text"
            onInput={(e) =>
              dispatch({ type: "number", payload: e.target.value })
            }
            placeholder="Enter number..."
          />
          <label>Image URL</label>
          <StyledInput
            type="text"
            onInput={(e) => dispatch({ type: "url", payload: e.target.value })}
            placeholder="Image url..."
          />
          <input type="submit" hidden />
        </StyledForm>
      </StyledSection>
    </>
  );
};
