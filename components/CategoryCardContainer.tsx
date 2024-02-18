import { Box, Container } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";


const CategoryCardContainer = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);


  return (
    <Box sx={{ margin: "4rem 0" }}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </Container>
    </Box>
  );
};

export default CategoryCardContainer;