import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_CxT9OzKDs92YFOAOstlSfURXs7ldFyrkvSMFv4qy";

function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState();

  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);

    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`,
    );

    setResult((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div className="app-title">
        <h3>Currency App</h3>
      </div>
      <div className="input-group">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        ></input>
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowRight style={{ fontSize: "20px", color: "#f39c12" }} />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        ></input>
      </div>
      <div>
        <button onClick={exchange} className="convert-button">
          Convert
        </button>
      </div>
    </div>
  );
}

export default Currency;
