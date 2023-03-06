import React from "react";
import { Dropdown } from "@nextui-org/react";
import { useLangStore } from "../../pages/store/languagechoose";
import { defaultJavaScriptReact } from "./value/javascriptreact";
import { defaultJava } from "./value/java";
import { defaultRust } from "./value/rust";
import { defaultC } from "./value/c";
import { defaultCPP } from "./value/cpp";
import { defaultGo } from "./value/golang";

export default function ListBoxItem() {
  const [selected, setSelected] = React.useState(new Set(["Java/TypeScript"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const { language, chooseLanguage } = useLangStore();
  const LanguageEnum = {
    JAVASCRIPT: defaultJavaScriptReact,
    JAVA: defaultJava,
    RUST: defaultRust,
    GOLANG: defaultGo,
    C: defaultC,
    CPP: defaultCPP,
  };

  //console.log(language);
  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          tt: "capitalize",
          borderRadius: 5,
          backgroundColor: "#7EC5BB",
          height: 35,
          color: "FloralWhite",
        }}
      >
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        //color="#155A73"
        color="default"
        aria-label="Single selection actions"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={(newSelected) => {
          const selectedKey = Array.from(newSelected)[0];
          const selectedLanguage: string =
            LanguageEnum[selectedKey.toUpperCase()];

          console.log("---------------");
          console.log(typeof selectedLanguage);
          console.log("---------------");
          chooseLanguage(selectedLanguage);
          console.log(selectedLanguage);
          setSelected(newSelected);
        }}
      >
        <Dropdown.Item key="JavaScript">JavaScript</Dropdown.Item>
        <Dropdown.Item key="Java">Java</Dropdown.Item>
        <Dropdown.Item key="Rust">Rust</Dropdown.Item>
        <Dropdown.Item key="Golang">Golang</Dropdown.Item>
        <Dropdown.Item key="C">C</Dropdown.Item>
        <Dropdown.Item key="Cpp">C++</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
