import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

const URL = "http://localhost:3001/";

export default function App() {
  const [data, setData] = useState("test");

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        console.log(res.data);
        setData(res.data.message);
      }).catch(error => {
        setData(error);
      });
  }, [])

  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}
