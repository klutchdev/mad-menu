import React from "react";
import { bool, func } from "prop-types";
import { StyledToggle } from "./Toggle.styled";

const Toggle = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledToggle
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </StyledToggle>
  );
};

Toggle.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Toggle;
