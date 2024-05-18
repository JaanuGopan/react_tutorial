import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./redux/CustomerSlice";
import { useDispatch } from "react-redux";
const CustomerAdd = () => {
  const [customer, setCustomer] = useState();
  const dispatch = useDispatch();
  const handleAddCustomer = () => {
    if (customer) {
      dispatch(addCustomerAction(customer));
      setCustomer("");
    }
  };
  return (
    <div>
      <h1>Add Customer</h1>
      <input
        value={customer}
        type="text"
        onChange={(e) => setCustomer(e.target.value)}
      ></input>
      <button onClick={handleAddCustomer}>Add</button>
    </div>
  );
};

export default CustomerAdd;
