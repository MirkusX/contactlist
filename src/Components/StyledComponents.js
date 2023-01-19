import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: blue;
  align-items: center;
  width: 40%;
  gap: 1em;
  padding: 1em;
`;

export const StyledInput = styled.input`
  width: 90%;
  padding: 1em;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1em;
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
`;

export const StyledImage = styled.img`
  width: 30%;
  object-fit: cover;
`;
