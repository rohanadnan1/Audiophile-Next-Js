import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/countSlice";
import { removeFromCart } from "../store/cartSlice";

const ProductCounter = ({product}: any) => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  const productWithCount = {
    ...product,
    count
  }

  const decrementCount = () => {
    if (count > 0) {
      dispatch(decrement());
      dispatch(removeFromCart(productWithCount));
    }
  }
  console.log(product, 'product');

  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "0.75rem",
        marginRight: "0.5rem",
      }}
    >
      <Button onClick={decrementCount}>
        -
      </Button>
      {productWithCount.count}
      <Button onClick={() => dispatch(increment())}>+</Button>
    </Box>
  );
};

export default ProductCounter;
