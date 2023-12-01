import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "./../Components/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/cart";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const list = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementItem = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };
  const decrementItem = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      {list.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <buton
            className="btn btn-success"
            onClick={() => navigate("/checkout")}
          >
            Go to Checkout
          </buton>
        </>
      ) : (
        <h3> No items in the Cart</h3>
      )}
    </>
  );
}
