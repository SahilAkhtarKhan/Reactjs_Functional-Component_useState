import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDetails() {
  const [profile, setProfile] = useState({});
  const { userid } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userid}`)
      .then((res) => setProfile(res.data));
  }, []);
  return (
    <>
      <p>
        My name is {profile.name} and email id is - {profile.email}
      </p>
    </>
  );
}
export default UserDetails;
