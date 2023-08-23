import Image from 'next/image'
import styles from './page.module.css'
import Intro from './components/index/intro'  
import MainInfo from './components/index/mainInfo'

export default function Home() {
  return (
    <main>
      <Intro/>
      <MainInfo/>
    </main>
  )
}

