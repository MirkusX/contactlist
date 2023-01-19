import { useReducer, useRef, useState } from "react";
import {
  ContactContainer,
  PopOutDiv,
  StyledDiv,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  const [show, setShow] = useState(true);
  const [info, setInfo] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const form = useRef();
  const showCreate = () => {
    setShow(!show);
  };
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
        <PopOutDiv>
          <div>
            <button onClick={() => showCreate()}>Create Contact</button>
          </div>
          <StyledForm display={show} ref={form} onSubmit={submitInfo}>
            <label>Name</label>
            <StyledInput
              type="text"
              onInput={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
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
              onInput={(e) =>
                dispatch({ type: "url", payload: e.target.value })
              }
              placeholder="Image url..."
            />
            <input type="submit" hidden />
          </StyledForm>
        </PopOutDiv>
      </StyledSection>
    </>
  );
};
