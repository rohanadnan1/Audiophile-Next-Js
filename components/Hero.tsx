import { Box, Container, Typography } from "@mui/material"
import Button from "./Button"

const Hero = () => {
    return (
        <Box sx={{ height: '75vh', width: '30vw', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'}}>
            <Typography variant="h3" sx={{color: 'rgb(109, 109, 109)', letterSpacing: 2, fontSize: '2rem', fontWeight: 600, marginBottom: '1.4rem'}}>New Products</Typography>
            <Typography variant="h1" sx={{fontWeight: 800, fontSize: '5rem', marginBottom: '1.5rem'}}>XX99 Mark II Headphones</Typography>
            <Typography variant="body1" sx={{color: 'rgb(109, 109, 109)', marginBottom: '1.5rem', fontSize: '1.3rem'}}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Typography>
            <Button variant="contained" color= 'rgb(218, 124, 74)' value="See Product"/>
        </Box>
    )
}

export default Hero