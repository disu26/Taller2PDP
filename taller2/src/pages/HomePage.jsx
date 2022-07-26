import React from 'react'
import Start from '../components/Start'
import { CardsProvider } from '../context/CardsProvider'

const HomePage = () => {
  return (
    <CardsProvider>
        <Start />
    </CardsProvider>
  )
}

export default HomePage