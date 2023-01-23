import { useEffect, useReducer, useRef, useState } from "react";
import {
  ContactContainer,
  MailIcon,
  PersonIcon,
  PhoneIcon,
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
  const storedList = JSON.parse(localStorage.getItem("c0nt4ct5")) || [];
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState(storedList);
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
    form.current.reset();
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
    setInfo(removeList);
  };

  useEffect(() => {
    setCategory(info);
    localStorage.setItem("c0nt4ct5", JSON.stringify(info));
  }, [info]);

  return (
    <>
      <StyledSection>
        <StyledDiv category>
          <StyledButton onClick={() => filter("all")} value="all">
            All
          </StyledButton>
          <StyledButton onClick={() => filter("Work")} value="work">
            Work
          </StyledButton>
          <StyledButton onClick={() => filter("Friends")} value="friends">
            Friends
          </StyledButton>
          <StyledButton onClick={() => filter("Family")} value="family">
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
                  <h2>
                    <PersonIcon />|{item.name}
                  </h2>
                  <h2>
                    <PhoneIcon />|{item.number}
                  </h2>
                  <h2>
                    <MailIcon />|{item.email}
                  </h2>
                  <StyledButton onClick={() => remove(index)}>
                    Remove
                  </StyledButton>
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
              required
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
              required
            >
              <label>Category</label>
              <option value="" disabled>
                Choose category...
              </option>
              <option value="Work">Work</option>
              <option value="Friends">Friends</option>
              <option value="Family">Family</option>
            </select>
            <input type="submit" hidden />
          </StyledForm>
        </PopOutDiv>
      </StyledSection>
    </>
  );
};
