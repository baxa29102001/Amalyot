import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function SingleQuote() {
  const [data, setData] = useState({});
  const quoteParams = useParams();

  console.log(quoteParams);

  const { quoteId } = quoteParams;
  useEffect(() => {
    axios
      .get(
        `https://quotes-4dc19-default-rtdb.firebaseio.com/quotes/${quoteId}.json`
      )
      .then(({ data }) => {
        console.log(data);

        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [quoteId]);

  return (
    <div className="content">
      <div className="singleQuote">
        <q>{data.title}</q>

        <p>{data.desc}</p>

        <h3>{data.author}</h3>
      </div>
    </div>
  );
}

export default SingleQuote;
