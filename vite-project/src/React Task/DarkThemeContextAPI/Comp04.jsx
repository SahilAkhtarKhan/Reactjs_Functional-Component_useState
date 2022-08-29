import { useContext } from "react";
import { TextContext, ThemeContext } from "../../App";
import Comp05 from "./Comp05";

function Comp04() {
  const useContextText = useContext(TextContext);
  const useContextTheme = useContext(ThemeContext);
  return (
    <>
      <Comp05 />
      <h3
        style={
          useContextTheme
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "red" }
        }
      >
        Heading 04-{useContextText}
      </h3>
    </>
  );
}
export default Comp04;
