import React from "react";
import "./EditorPane.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import {
  xcodeLight,
  xcodeLightInit,
  xcodeDark,
  xcodeDarkInit,
} from "@uiw/codemirror-theme-xcode";

import { useEffect } from "react";

const EditorPane = () => {
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="500px"
      extensions={[javascript({ jsx: true })]}
      theme={xcodeDarkInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
      })}
    />
  );
};

export default EditorPane;
