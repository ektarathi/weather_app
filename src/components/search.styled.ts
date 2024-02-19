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
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`
export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`
export const ListInput = styled.ul`
  padding: 0;

  li {
    list-style-type: none;
  }
`