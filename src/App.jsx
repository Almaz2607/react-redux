import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  function addCash(cash) {
    dispatch({ type: "ADD_CASH", payload: cash });
  }

  function getCash(cash) {
    dispatch({ type: "GET_CASH", payload: cash });
  }

  return (
    <div className="App">
      <p className="cash">{cash}</p>
      <div className="buttons">
        <button onClick={() => addCash(Number(prompt(cash)))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt(cash)))}>
          Снять со счета
        </button>
      </div>
    </div>
  );
}

export default App;
