import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgb(144, 202, 249);
  cursor: pointer;
  transition: border-color 0.25s;
  margin-left: 10px;

  &:hover {
    background-color: rgb(66, 165, 245);
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const StyledForm = styled.form`
  padding: 20px;
  border-radius: 5px;
  flex-direction: row;
  padding-top: 0
`
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

export const StyledHeading = styled.h4`
  font-weight: normal;
  color: white;
  margin-bottom: .5rem;
  margin-top: 0;
`

export const StyledWrapper = styled.div`
  box-shadow: rgba(200, 200, 200, 0.3) 0px 1px 2px 0px, rgba(200, 200, 200, 0.15) 0px 1px 3px 1px;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

`

