import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { tags as t } from "@lezer/highlight";
import React, { useState } from "react";
import { defaultJavaScriptReact } from "./value/javascriptreact";
import { defaultJava } from "./value/java";
import { language, StreamLanguage } from "@codemirror/language";

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
    //#00FFAC
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
  props?: unknown;
}
const Editor: React.FC<Props> = () => {
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  return (
    <CodeMirror
      value={defaultJava}
      theme={myTheme}
      extensions={[javascript({ jsx: true }), java()]}
      onChange={() => {
        console.log("fgh");
      }}
      readOnly={timerFinished}
      height={"95%"}
      width={"100%"}
      style={{
        outline: "none",
        scrollbarWidth: "none",
        scrollbarColor: "black",
        margin: 0,
        padding: 0,
        borderRadius: 10,
      }}
      basicSetup={{
        foldGutter: true,
        highlightActiveLineGutter: false,
        lineNumbers: true,
        indentOnInput: true,
      }}
    />
  );
};
export default Editor;
