import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { increment, decrement } from "../store/countSlice";
import { removeFromCart, removeBill, decrementCount, incrementCount, addBill } from "../store/cartSlice";
import {updateCount} from "../store/cartSlice";
import { AppDispatch } from '../store/store';



const ProductCounter = ({product}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart.cart);
  const initialCount = cart.find((item: any) => item.id === product.id)?.count || 0;
  const [count, setCount] = useState(initialCount);

  const decrementCountFunc = () => {
    if (product.count > 0) {
      dispatch(decrementCount(product))
      dispatch(removeFromCart(product));
      dispatch(removeBill(product))
    }
  }

  const incrementCountFunc = () => {
    setCount(count + 1);
    dispatch(incrementCount(product))
    dispatch(updateCount({productId: product.id, newCount: product.count + 1}))
    dispatch(addBill({price: product.price}))
  }

  // console.log(product.count, 'product');
  // console.log(product, 'product');

  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "0.75rem",
        marginRight: "0.5rem",
      }}
    >
      <Button onClick={decrementCountFunc}>
        -
      </Button>
      {count}
      <Button onClick={incrementCountFunc}>+</Button>
    </Box>
  );
};

export default ProductCounter;
