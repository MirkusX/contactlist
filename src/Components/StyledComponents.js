import styled from "styled-components";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsMailbox,
} from "react-icons/bs";

//styling

export const PersonIcon = styled(BsFillPersonFill)`
  vertical-align: middle;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  vertical-align: middle;
`;

export const MailIcon = styled(BsMailbox)`
  vertical-align: middle;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffe381;
  align-items: center;
  width: 100%;
  gap: 1em;
  padding: 1em 0;
  transition: all 0.5s ease-in-out;
  transform: translate(${(props) => (props.display ? "0%" : "100%")});
  pointer-events: all;
`;

export const PopOutDiv = styled.div`
  width: 50%;
  text-align: right;
  position: fixed;
  right: 0;
  pointer-events: none;
  @media (max-width: 811px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  background: #cec288;
  border: none;
  padding: 1em;
  cursor: pointer;
  font-family: "Unbounded", cursive;
  pointer-events: all;

  &:active {
    background-color: #1c448e;
  }
  ${(props) => {
    if (props.create)
      return `
    width: 20%;
    `;
  }}
`;

export const StyledInput = styled.input`
  width: 80%;
  padding: 1em;
  font-family: "Unbounded", cursive;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-x: hidden;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-auto-columns: 15%;
  width: 70%;
  gap: 1em;
  @media (max-width: 811px) {
    display: flex;
    flex-direction: column;
    margin-top: 5em;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 1em;
  background-color: #ffe381;

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
    flex-direction: column;
    position: fixed;
    left: 0;
    @media (max-width: 811px) {
      flex-direction: row;
    }
    `;
  }}
`;

export const StyledImage = styled.img`
  width: 30%;
  object-fit: cover;
`;
