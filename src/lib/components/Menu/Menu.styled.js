import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eeeeee;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  max-height: 100vh;
  text-align: left;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.15s linear;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    font-weight: bold;
    font-family: sans-serif;
    text-transform: uppercase;
    padding: 2rem;
    letter-spacing: 0.25rem;
    color: #060606;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:focus {
      border: none;
      outline: none;
      color: #030303aa;
      transition: color 0.3s linear;
    }

    &:hover {
      color: #030303aa;
      transition: color 0.3s linear;
    }
  }
`;
