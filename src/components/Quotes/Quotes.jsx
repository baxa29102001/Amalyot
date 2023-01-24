import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://quotes-4dc19-default-rtdb.firebaseio.com/quotes.json")
      .then(({ data }) => {
        const newData = Object.keys(data).map((item) => {
          return {
            ...data[item],
            id: item,
          };
        });

        setQuotes(newData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="content">
      {quotes.map((item) => (
        <Link to={`/quotes/${item.id}`}>
          <div key={item.id} className="quote">
            <q>{item.title}</q>

            <h3>{item.author}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Quotes;
