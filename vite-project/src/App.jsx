import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Home from "./ReactRouter/Home";
import Navbar from "./ReactRouter/Navbar";
import UserDetails from "./ReactRouter/userDetails";
import Users from "./ReactRouter/users";

// import { useState } from "react";
// import { createContext } from "react";
// import Comp01 from "./React Task/DarkThemeContextAPI/Comp01";

// const TextContext = createContext();
// const ThemeContext = createContext();
function App() {
  // const [text, setText] = useState("");
  // const [theme, setTheme] = useState(true);
  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={(e) => {
  //         setText(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <br />
  //     <TextContext.Provider value={text}>
  //       <ThemeContext.Provider value={theme}>
  //         <Comp01 />
  //       </ThemeContext.Provider>
  //     </TextContext.Provider>

  //     <br />
  //     <button
  //       onClick={() => {
  //         setTheme(!theme);
  //       }}
  //     >
  //       Change Theme
  //     </button>
  // </>
  // );
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Contact />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/:userid" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
// export { TextContext, ThemeContext };
