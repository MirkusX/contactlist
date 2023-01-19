import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
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
