import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  }, []);
  return (
    <>
      <div>
        {user.map((elem) => {
          return (
            <p key={elem.id}>
              {elem.id} {elem.name}
              <Link to={`/user/${elem.id}`}>
                <button>Click</button>
              </Link>
            </p>
          );
        })}
      </div>
    </>
  );
}
export default Users;
