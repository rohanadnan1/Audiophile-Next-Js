import { Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";


const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div style={{backgroundColor: '#191919'}}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem 0 0 0",
          backgroundColor: "#191919",
          color: "white",
          paddingBottom: "0.3rem",
        }}
        onClick={() => showCart ? setShowCart(false) : null}
      >
        <Image
          src="/assets/shared/desktop/logo.svg"
          alt="logo"
          width={150}
          height={40}
        />
        <div>
          <Link
            href="/"
            style={{ marginRight: "2rem", fontWeight: 700, color: "white" }}
          >
            Home
          </Link>
          <Link
            href="/"
            style={{ marginRight: "2rem", fontWeight: 700, color: "white" }}
          >
            Headphone
          </Link>
          <Link
            href="/"
            style={{ marginRight: "2rem", fontWeight: 700, color: "white" }}
          >
            Speakers
          </Link>
          <Link
            href="/"
            style={{ marginRight: "2rem", fontWeight: 700, color: "white" }}
          >
            Earphones
          </Link>
        </div>
        <Button onClick={() => setShowCart(!showCart)}>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
            width={30}
            height={30}
          />
        </Button>
        {showCart && <Cart />}
      </Container>
    </div>
  );
};

export default Navbar;
