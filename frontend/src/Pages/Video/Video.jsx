import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="video-main">
      <div className="video-heading"> &lt;Video Tutorial/&gt;</div>
      <div className="discription">
        Video Tutorial of the app and how to setup it locally{" "}
      </div>
      <iframe
        width="945"
        height="658"
        src="https://www.youtube.com/embed/H5v3kku4y6Q"
        title="Harry Styles - As It Was (Official Video)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
