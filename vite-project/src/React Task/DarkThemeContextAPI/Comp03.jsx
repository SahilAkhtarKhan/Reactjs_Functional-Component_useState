import { TextContext, ThemeContext } from "../../App";
import Comp04 from "./Comp04";
import { useContext } from "react";

function Comp03() {
  const useContextText = useContext(TextContext);
  const useContextTheme = useContext(ThemeContext);
  return (
    <>
      <Comp04 />
      <h3
        style={
          useContextTheme
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "red" }
        }
      >
        Heading 03- {useContextText}
      </h3>
    </>
  );
}
export default Comp03;
