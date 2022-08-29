import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { AddToFav } from "./App";

function Card() {
  const [user, setUser] = useState([]);
  const [favCard, setfavCard] = useState([]);
  const [searchCard, setSearchCard] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setFilteredList(data);
      });
  }, []);

  useEffect(() => {
    if (searchCard === "") {
      setUser([...filteredList]);
      return;
    }
    const updatedList = filteredList.filter((val) => {
      if (
        val.name.toLowerCase().includes(searchCard.toLowerCase()) ||
        val.website.toLowerCase().includes(searchCard.toLowerCase())
      ) {
        return val;
      }
    });
    setUser(updatedList);
  }, [searchCard]);

  function favCards(index, data) {
    const hasElementInFav = favCard.some((item) => item.id === data.id);
    if (hasElementInFav) {
      return;
    }
    setfavCard((prv) => {
      return [...prv, data];
    });
  }

  return (
    <>
      <input
        type="search"
        value={searchCard}
        placeholder="Search card here..."
        onChange={(e) => {
          setSearchCard(e.target.value);
        }}
      />
      <br />
      <div className="fav-nonfav">
        <div>
          {user.map((data, index) => (
            <div className="container">
              <div>
                <h6> Name : {data.name}</h6>
                <p>
                  <b>Website : </b>
                  {data.website}
                  <br />
                </p>
              </div>
              <div>
                <Button
                  style={{ backgroundColor: "darkblue", margin: "10px" }}
                  onClick={() => {
                    favCards(index, data);
                  }}
                >
                  Add to Fav
                </Button>
                <br />
              </div>
            </div>
          ))}
        </div>
        <div>
          <AddToFav data={favCard} />
        </div>
      </div>
    </>
  );
}

export { Card };
