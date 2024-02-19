import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { increment, decrement } from "../store/countSlice";
import { removeFromCart, removeBill, decrementCount, incrementCount, addBill } from "../store/cartSlice";

const ProductCounter = ({product}: any) => {
  const dispatch = useDispatch();
  

  const decrementCountFunc = () => {
    if (product.count > 0) {
      dispatch(decrementCount(product))
      dispatch(removeFromCart(product));
      dispatch(removeBill(product))
    }
  }

  const incrementCountFunc = () => {
    dispatch(incrementCount(product))
    dispatch(addBill({price: product.price}))
    console.log( 'product');
  }

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
      {product.count}
      <Button onClick={incrementCountFunc}>+</Button>
    </Box>
  );
};

export default ProductCounter;
