import styled from "styled-components";

export const StyledToggle = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.15rem;
    background: #060606;
    border-radius: 16px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transition: all 0.2s ease;
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transition: all 0.02s ease;
    }

    :nth-child(3) {
      transition: all 0.2s ease;
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
