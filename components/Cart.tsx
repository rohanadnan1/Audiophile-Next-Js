import { Box, Typography, Button as MUIButton } from "@mui/material";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeAll } from "../store/cartSlice";

const Cart = () => {
  const cartArr = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  console.log(cartArr, 'cart');

  return (
    <Box
      sx={{
        position: "absolute",
        height: "88.8vh",
        width: "99.2vw",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 73,
        right: -2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 200,
          top: 20,
          minHeight: "20vh",
          width: "20vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Cart</Typography>
          <MUIButton onClick={()=>dispatch(removeAll())}>Remove All</MUIButton>
        </Box>
        {cartArr.length > 0 && cartArr.map((product: any) => {
                  return (
                    <Box
                      key={product.id}
                      sx={{
                        display: "flex",
                        margin: "1rem 0",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Image
                          src={product.image.mobile.replace(".", "")}
                          width={50}
                          height={50}
                          alt="headphones"
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "1rem",
                          }}
                        >
                          <Typography variant="body1">{product.name}</Typography>
                          <Typography variant="body2" sx={{ color: " #6f7275" }}>
                            ${product.price}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography sx={{ fontSize: "0.75rem" }}>Count</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 800 }}>
                          {product.count}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button
          color="#d97d45"
          variant="contained"
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          <Link href="/checkout">Checkout</Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
