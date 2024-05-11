import React from 'react'
import icon from '../icons/icon1.png'
import { Header } from '../components/Header';

export function Home() {
    
  return (
    <Header title={["Monitor", "Your", "Health"]} subtitle={["using atrificial", "inteligence"]} description="" icon={icon} iconBig={false} home={true} />
  )
}
