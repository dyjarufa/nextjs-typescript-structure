import React from "react"
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import {Container } from '../styles/pages/Home'

// export default function Home() {
  const Home: React.FC = () => {
    return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

        <RocketseatLogo />
        <Container>
            <h1>ReactJS Structure</h1>
            <p>A ReactJS + Next.js structure made by Rocketseat.</p>
        </Container>
    </div>
  )
}

export default Home
