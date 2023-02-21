import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import React, { useState, useEffect } from "react";

const defaultValue = `import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
};`;
const myTheme = createTheme({
  theme: "dark",
  settings: {
    background: "transparent",
    foreground: "#75baff",
    caret: "#fff",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "transparent",
    gutterForeground: "#7EC5BB",
    //00FFAC
  },
  styles: [
    { tag: t.comment, color: "#5EB45C", fontStyle: "italic" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#E6E0C1" },
    { tag: t.number, color: "#15ED47" },
    { tag: t.bool, color: "#8F7EC5" },
    { tag: t.null, color: "#ED9D15" },
    { tag: t.keyword, color: "#fc6" },
    { tag: t.operator, color: "#BCE4C1" },
    { tag: t.className, color: "#f5d" },
    { tag: t.definition(t.typeName), color: "#10EBD0" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#BCE4E1" },
    { tag: t.tagName, color: "#ED156B" },
    { tag: t.attributeName, color: "#ED156B" },
  ],
});

interface Props {
  props?: any;
}
const Editor: React.FC<Props> = () => {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHeight(window.innerHeight);
    }
  }, []);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  return (
    <CodeMirror
      value={defaultValue}
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={() => {
        console.log("fgh");
      }}
      //https://go.360koralive.com/2023/02/the-date-of-friendly-match-number-78.html
      readOnly={timerFinished}
      //minHeight={(height * 0.68).toString() + "px"}
      //maxHeight={(height * 0.68).toString() + "px"}
      maxWidth={(height * 0.6).toString()}
      minWidth={(height * 0.6).toString()}
      height={(height * 0.68).toString() + "px"}
      style={{
        outline: "none",
        // border: "solid 2px black",
        //borderTop: "solid 2px black",
        scrollbarWidth: "none",
        scrollbarColor: "black",
        margin: 0,
        padding: 0,
        borderRadius: 10,
        //overflow: "hidden",
        //overflowX: "auto",
        //overflowY: "hidden",
        //borderColor: "transparent",
        //columnWidth: 100,
      }}
      basicSetup={{
        foldGutter: true,
        highlightActiveLineGutter: false,
        lineNumbers: true,
        indentOnInput: true,
      }}
      onEnded={() => {
        console.log("OUI");
      }}
    />
  );
};
export default Editor;
