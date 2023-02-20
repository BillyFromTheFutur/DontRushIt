import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function ListBoxItem() {
  const [selected, setSelected] = React.useState(new Set(["Chose a language"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          tt: "capitalize",
          borderRadius: 5,
          backgroundColor: "#7EC5BB",
          height: 35,
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
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="JavaScript">JavaScript</Dropdown.Item>
        <Dropdown.Item key="Java">Java</Dropdown.Item>
        <Dropdown.Item key="Rust">Rust</Dropdown.Item>
        <Dropdown.Item key="Golang">Golang</Dropdown.Item>
        <Dropdown.Item key="C">C</Dropdown.Item>
        <Dropdown.Item key="C++">C++</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
