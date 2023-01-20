import { useEffect, useReducer, useRef, useState } from "react";
import {
  ContactContainer,
  PopOutDiv,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledImage,
  StyledInput,
  StyledSection,
} from "../Components/StyledComponents";
import { initialState, reducer } from "../Components/useReducer";
export const Frontpage = () => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState([]);
  const [category, setCategory] = useState([]);
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
        category: state.category,
      },
    ]);
  };
  const filter = (props) => {
    if (props === "all") {
      setCategory(info);
    } else {
      setCategory(info.filter((item) => item.category === props));
    }
  };

  const remove = (index) => {
    const removeList = [...category];
    removeList.splice(index, 1);
    setCategory(removeList);
    setInfo(category);
  };

  useEffect(() => {
    setCategory(info);
  }, [info]);

  return (
    <>
      <StyledSection>
        <StyledDiv category>
          <StyledButton onClick={() => filter("all")} value="all">
            All
          </StyledButton>
          <StyledButton onClick={() => filter("work")} value="work">
            Work
          </StyledButton>
          <StyledButton onClick={() => filter("friends")} value="friends">
            Friends
          </StyledButton>
          <StyledButton onClick={() => filter("family")} value="family">
            Family
          </StyledButton>
        </StyledDiv>
        <ContactContainer>
          {category.map((item, index) => {
            return (
              <StyledDiv key={index}>
                <StyledImage src={item.url} />
                <StyledDiv inner>
                  <h1>{item.category}</h1>
                  <h2>{item.name}</h2>
                  <h2>{item.number}</h2>
                  <h2>{item.email}</h2>
                  <button onClick={() => remove(index)}>Remove</button>
                </StyledDiv>
              </StyledDiv>
            );
          })}
        </ContactContainer>
        <PopOutDiv>
          <div>
            <StyledButton onClick={() => showCreate()}>
              Create Contact
            </StyledButton>
          </div>
          <StyledForm display={show} ref={form} onSubmit={submitInfo}>
            <label>Name</label>
            <StyledInput
              type="text"
              onInput={(e) =>
                dispatch({ type: "name", payload: e.target.value })
              }
              placeholder="Enter name..."
              required
            />
            <label>E-Mail</label>
            <StyledInput
              type="text"
              onInput={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
              placeholder="Enter email..."
              required
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
              required
            />
            <select
              type="text"
              placeholder="Category"
              onInput={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
            >
              <option value="" selected disabled>
                Choose category...
              </option>
              <option value="work">Work</option>
              <option value="friends">Friends</option>
              <option value="family">Family</option>
            </select>
            <input type="submit" hidden />
          </StyledForm>
        </PopOutDiv>
      </StyledSection>
    </>
  );
};
