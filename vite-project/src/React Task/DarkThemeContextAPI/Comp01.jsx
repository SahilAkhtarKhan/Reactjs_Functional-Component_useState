import { useContext } from "react";
import { TextContext, ThemeContext } from "../../App";
import Comp02 from "./Comp02";

function Comp01() {
  const useContextText = useContext(TextContext);
  const useContextTheme = useContext(ThemeContext);
  return (
    <>
      <Comp02 />
      <h3
        style={
          useContextTheme
            ? { backgroundColor: "yellow" }
            : { backgroundColor: "red" }
        }
      >
        Heading 01- {useContextText}
      </h3>
    </>
  );
}
export default Comp01;
