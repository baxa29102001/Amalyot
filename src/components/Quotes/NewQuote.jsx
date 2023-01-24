import React, { useState, useRef } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function NewQuote() {
  const [loading, setLoading] = useState(false);
  const authorRef = useRef();
  const desctiptionRef = useRef();
  const titleRef = useRef();
  const navigate = useNavigate();

  const sendDataToServer = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: titleRef.current.value,
      desc: desctiptionRef.current.value,
      author: authorRef.current.value,
    };

    axios
      .post(
        "https://quotes-4dc19-default-rtdb.firebaseio.com/quotes.json",
        data
      )
      .then((res) => {
        console.log(res);
        navigate("/quotes");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={sendDataToServer}>
      <div>
        <label htmlFor="">Muallif ismi</label>
        <input type="text" ref={authorRef} />
      </div>{" "}
      <div>
        <label htmlFor="">Quotani qisqachi nomi</label>
        <input type="text" ref={titleRef} />
      </div>{" "}
      <div>
        <label htmlFor="">Quotona tafsifi</label>
        <textarea type="text" ref={desctiptionRef} />
      </div>
      <button type="submit" className="btn" disabled={loading}>
        {loading && <div className="loader"></div>}
        Submit
      </button>
    </form>
  );
}

export default NewQuote;
