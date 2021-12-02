import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Loader from "./Loader";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [recipie, setRecipie] = useState("salad");
  const [loading, setLoading] = useState(false);

  const YOUR_APP_KEY = "Your App Key";
  const app_key_id = "Your ID";

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${recipie}&app_id=${app_key_id}&app_key=${YOUR_APP_KEY}`
        );
        setData(response.data.hits);
        setLoading(false);
      } catch {
        console.log("error");
      }
    };
    fetchApi();
  }, [recipie]);

  return (
    <div className="section">
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <Header setRecipie={setRecipie} input={input} setInput={setInput} />
          <Card data={data} />
        </div>
      )}
    </div>
  );
};

export default Main;
