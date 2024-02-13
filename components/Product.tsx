import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import ProductCounter from "./ProductCounter";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Product{
    id: string
}

interface Props {
  product: any;
}




const Product: React.FC<Props> = ({ product }) => {

    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart)

    const handleAdd = (product: any) => {
        dispatch(addToCart(product))
    }
    
    console.log(cart)
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Image

        // using the replace method to remove the dot in the image path

        src={product?.image?.desktop?.replace(".", "") || ''}
        width={300}
        height={300}
        alt="image"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "65vh",
          width: "25vw",
          justifyContent: "center",
          marginTop: "5rem",
          marginLeft: "8rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontSize: "1rem",
            letterSpacing: "0.5rem",
            color: "#d97d45",
            marginBottom: "1rem",
          }}
        >
          New Product
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontSize: "2.5rem",
          }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#727272", fontSize: "1rem", marginBottom: "3rem" }}
        >
          {product.description}
        </Typography>
        <Typography variant="h5" sx={{fontSize: '1rem', fontWeight: '600'}}>Price: {product.price}$</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ProductCounter />
          <Button variant="contained" color="#d97d45" onClick={()=>handleAdd(product)}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
