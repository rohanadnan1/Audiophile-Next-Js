import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '2rem 0 0 0',
        }}>
            <Image src='/assets/shared/desktop/logo.svg' alt="logo" width={150} height={40} />
            <div>
                <Link href='/' style={{ marginRight: '2rem', fontWeight: 700, color: 'white' }}>Home</Link>
                <Link href='/' style={{ marginRight: '2rem', fontWeight: 700, color: 'white' }}>Headphone</Link>
                <Link href='/' style={{ marginRight: '2rem', fontWeight: 700, color: 'white' }}>Speakers</Link>
                <Link href='/' style={{ marginRight: '2rem', fontWeight: 700, color: 'white' }}>Earphones</Link>
            </div>
            <Image src='/assets/shared/desktop/icon-cart.svg' alt="cart" width={30} height={30} />
        </Container>
    )
}

export default Navbar;