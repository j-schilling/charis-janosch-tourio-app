import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: #4E3283;
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  cursor: pointer;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: #CC5780;
      color: white;
    `}
`;
