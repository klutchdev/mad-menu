import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import { Menu, Toggle } from "./components";
import FocusLock from "react-focus-lock";

const MadMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <Toggle open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  );
};

export default MadMenu;
