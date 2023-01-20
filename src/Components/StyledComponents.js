import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: blue;
  align-items: center;
  width: 100%;
  gap: 1em;
  padding: 1em 0;
  transition: all 0.5s ease-in-out;
  transform: translate(${(props) => (props.display ? "0%" : "100%")});
`;

export const PopOutDiv = styled.div`
  width: 40%;
  text-align: right;
  position: fixed;
  right: 0;
`;

export const StyledButton = styled.button`
  background: blue;
  border: none;
  padding: 1em;
`;

export const StyledInput = styled.input`
  width: 90%;
  padding: 1em;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: hidden;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1em;
  margin-left: 5em;
  background-color: lightblue;
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 1em;
  background-color: blue;
  ${(props) => {
    if (props.inner)
      return `
    text-align: left;
    display: block;`;
  }}
  ${(props) => {
    if (props.category)
      return `
    background: inherit;
    flex-direction: column;`;
  }}
`;

export const StyledImage = styled.img`
  width: 30%;
  object-fit: cover;
`;
