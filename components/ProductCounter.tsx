import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/countSlice";

const ProductCounter = () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "0.75rem",
        marginRight: "0.5rem",
      }}
    >
      <Button onClick={() => (count > 0 ? dispatch(decrement()) : null)}>
        -
      </Button>
      {count}
      <Button onClick={() => dispatch(increment())}>+</Button>
    </Box>
  );
};

export default ProductCounter;
