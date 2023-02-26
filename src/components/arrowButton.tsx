import React, { useState } from "react";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

interface Props {
  arrowTop: () => void;
  arrowDown: () => void;
}

export const ArrowButton: React.FC<Props> = ({ arrowTop, arrowDown }) => {
  const [top, setTop] = useState<boolean>(true);
  let arrowicon = <HiChevronDoubleDown size={"70%"} color="white" />;
  if (top) {
    arrowicon = <HiChevronDoubleDown size={"70%"} color="white" />;
  } else {
    arrowicon = <HiChevronDoubleUp size={"70%"} color="white" />;
  }
  return (
    <button
      onClick={() => {
        setTop(!top);

        if (top) {
          arrowTop();
        } else {
          arrowDown();
        }
      }}
      className={`absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-black/5 ease-out hover:scale-110 hover:bg-black/20 focus:outline-none`}
    >
      {arrowicon}
    </button>
  );
};
