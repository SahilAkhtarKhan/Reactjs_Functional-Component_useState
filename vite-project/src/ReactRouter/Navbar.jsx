import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            gap: "20%",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/*">Contact</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
