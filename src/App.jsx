import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAC, removeCustomerAC } from "./store/customerReducer";
import { addCashAC, getCashAC } from "./store/cashReducer";
import { fetchCustomers } from "./asyncAction/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  function addCash(cash) {
    dispatch(addCashAC(cash));
  }

  function getCash(cash) {
    dispatch(getCashAC(cash));
  }

  function addCustomer(name) {
    const customer = {
      name: name,
      id: Date.now(),
    };
    dispatch(addCustomerAC(customer));
  }

  function removeCustomer(customer) {
    dispatch(removeCustomerAC(customer.id));
  }

  function addManyCustomers() {
    dispatch(fetchCustomers());
  }

  return (
    <div className="App">
      <p className="cash">{cash}</p>
      <div className="buttons">
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addManyCustomers()}>
          Добавить клиентов из базы
        </button>
      </div>
      {customers.length > 0 ? (
        customers.map((customer) => (
          <p
            key={customer.id}
            className="customer"
            onClick={() => removeCustomer(customer)}
          >
            {customer.name}
          </p>
        ))
      ) : (
        <p className="customer">Клиенты отсутствуют!</p>
      )}
    </div>
  );
}

export default App;
