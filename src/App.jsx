import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
function App() {
  const [photos, setPhotos] = useState([]);
  const [id, setId] = useState("1");
 const [errorMessage, setErrorMessage] = useState("");
  function feacthData() {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        setPhotos(data);
      });
  }
  const arr = [];
  for (let i = 1; i <= 5000; i++) {
    arr.push(i);
  }

  useEffect(() => {
    feacthData();
  }, [id]);

 
 const handleChange = (event) => {
    setId(event.target.value);
    if (1<=event.target.value&&event.target.value<=5000) {
      setErrorMessage("");
    } else {
      setErrorMessage("Please Enter Number between range 1 to 5000 Only");
    }
  };
  return (
      <div>
        <input
          className="border-2 border-black"
          placeholder="Enter Here"
          onChange={handleChange}
        />
        {errorMessage && <p>{errorMessage}</p>}

        {/* {photos.map((b) => (
        <Card a={b} />
      ))} */}
        <Card a={photos} option={id} setoption={setId} />
        {/*  <select
        onChange={(e) => {
          setId(e.target.value);
        }}
      >
        {arr.map((id) => (
          <option option={id} value={id}>
            {id}
          </option>
        ))}
      </select>*/}
      </div>
   
  );
}

export default App;