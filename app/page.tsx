'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Card from './components/Card'
import Arrow from './components/Arrow'

export default function Home() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <main className={styles.main}>
      <a onClick={handleClick}>
        <div className={styles.rightArrow}>
            <Arrow />
        </div>
      </a>
      <Card />
    </main>
  )
}
