import React from "react";
import { useState } from "react";
import "./Class.css";
import { v4 as uuidv4 } from "uuid";
import { generateUsername } from "unique-username-generator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClassRoom = () => {
  const createNewRoom = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const rmndUserName = generateUsername(" ");
    setUserId(newId);
    setUserName(rmndUserName);
    console.log(newId);
    notify();
  };

  const notify = () =>
    toast.success("New RoomId created Successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div className="classroom">
      <div className="main">
        Welcome OnBoard
        <div className="sub-text">Paste invitaion room id and click Join</div>
        <form>
          <input
            placeholder="Room ID"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
            value={userId}
          ></input>
          <input
            placeholder="Enter User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
          ></input>
          <button className="coding-button">Join Room</button>
        </form>
        If you don't have an invite, then create{" "}
        <a href="#" onClick={createNewRoom}>
          {" "}
          Create New
        </a>
      </div>
    </div>
  );
};

export default ClassRoom;
