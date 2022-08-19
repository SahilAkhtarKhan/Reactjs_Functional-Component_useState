import "./App.css";
import { Button } from "reactstrap";
import { Card } from "./ApiTask";

function AddToFav(props) {
  const { data } = props;
  return data.map((item) => {
    return (
      <div className="container">
        <div>
          <h6> Name : {item.name}</h6>
          <p>
            <b>Website : </b>
            {item.website}
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
            Remove fav
          </Button>
          <br />
        </div>
      </div>
    );
  });
}

function App() {
  return (
    <div className="card">
      <h1>API List</h1>
      <Card />
    </div>
  );
}

export { App, AddToFav };
