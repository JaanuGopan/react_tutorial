import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCustomer } from "./redux/CustomerSlice";
const CustomerView = () => {
  const customerList = useSelector((state) => state.Customer);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeCustomer(index));
  };
  return (
    <div>
      <h3>Customer View</h3>
      <ul>
        {customerList.map((customer, index) => (
          <li>
            {customer}{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerView;
