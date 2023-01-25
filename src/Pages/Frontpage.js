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
  //gets items in localstorage
  const storedList = JSON.parse(localStorage.getItem("c0nt4ct5")) || [];
  //usestate to display and hide form
  const [show, setShow] = useState(false);
  //usestate for items
  const [info, setInfo] = useState(storedList);
  //usestate for separating items into different categories
  const [category, setCategory] = useState([]);
  //import reducer state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  //targets the form
  const form = useRef();

  //function for hiding and displaying "create contact" form
  const showCreate = () => {
    setShow(!show);
  };

  //function that stores user input in info state and resets form on submit
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

  //function for filtering items in categories
  const filter = (props) => {
    if (props === "all") {
      setCategory(info);
    } else {
      setCategory(info.filter((item) => item.category === props));
    }
  };

  //function for removing items from info and category state
  const remove = (index) => {
    const removeList = [...category];
    removeList.splice(index, 1);
    setCategory(removeList);
    setInfo(removeList);
  };

  //sets category the same as info so they display in "all" category when added, also sets items in local storage
  useEffect(() => {
    setCategory(info);
    localStorage.setItem("c0nt4ct5", JSON.stringify(info));
  }, [info]);

  return (
    <>
      <StyledSection>
        <StyledDiv category>
          {/* buttons for switching categories */}
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
          {/* map for displaying items in category state */}
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
            <StyledButton create onClick={() => showCreate()}>
              Create Contact
            </StyledButton>
          </div>
          <StyledForm ref={form} onSubmit={submitInfo} display={show}>
            {/* form */}
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
            <label>Category</label>
            <select
              type="text"
              placeholder="Category"
              onInput={(e) =>
                dispatch({ type: "category", payload: e.target.value })
              }
              required
            >
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
