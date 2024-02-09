import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { Container } from '@mui/material'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div style={{
      backgroundImage: 'url(/assets/home/desktop/image-hero.jpg)',
      height: '100vh',
      backgroundSize: 'cover',
      color: 'white',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Container>
        <Navbar />
        <hr style={{
          opacity: 0.5,
          marginTop: '1.3rem',
        }} />
      </Container>
     <Container>
        <Hero />
     </Container>
    </div>
  )
}

export default Home
