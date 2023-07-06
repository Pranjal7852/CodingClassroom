import React, { useContext, useEffect, useState } from "react";
import "./Editor.css";
import { navbarContext } from "../../context/NavbarContext";
import Client from "../../Components/Client/Client";
import EditorPane from "../../Components/EditorPane/EditorPane";
import { useRef } from "react";
import { initSocket } from "../../../socket";
import { ACTIONS } from "../../utils/actions";
import { useLocation } from "react-router-dom";

const Editor = () => {
  const [navState, setNavState] = useContext(navbarContext);
  const socketRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    setNavState(false);
    async function init() {
      socketRef.current = await initSocket();

      // socketRef.current.emit(ACTIONS.JOIN, {
      //   roomId,
      //   userName: location.state?.userName,
      // });
    }
    init();
  }, []);

  const [client, setClient] = useState([
    { socketId: 1, userName: "Pranjal Goyal" },
    { socketId: 2, userName: "Shitij Roodkee" },
    { socketId: 3, userName: "Pranjal Goyal" },
    { socketId: 4, userName: "Pranjal Goyal" },
    { socketId: 5, userName: "Shitij Roodkee" },
    { socketId: 6, userName: "Pranjal Goyal" },
  ]);

  return (
    <div className="editor-main">
      <div className="editor-control">
        <div className="editor-logo">
          <img src="/favicon.png"></img>
          Coding Classroom
        </div>
        <div className="editor-list">
          {client.map((client) => {
            return (
              <Client username={client.userName} key={client.socketId}></Client>
            );
          })}
        </div>
        <div className="editor-btn">
          <button>Click Me</button>
          <button>Click me</button>
        </div>
      </div>

      <div className="editor-window">
        <EditorPane />
      </div>
    </div>
  );
};

export default Editor;
