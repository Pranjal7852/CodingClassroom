import React, { useContext, useEffect } from "react";
import "./Editor.css";
import { navbarContext } from "../../context/NavbarContext";

const Editor = () => {
  const [navState, setNavState] = useContext(navbarContext);
  useEffect(() => {
    setNavState(false);
  }, []);
  return (
    <div className="editor-main">
      <div className="editor-control">
        <div className="editor-logo">Coding Classroom</div>
        <div className="editor-list"></div>
        <div className="editor-btn">
          <button>Click Me</button>
          <button>Click me</button>
        </div>
      </div>

      <div className="editor-window"></div>
    </div>
  );
};

export default Editor;
