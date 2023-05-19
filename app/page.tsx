'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Card from './components/Card'
import Arrow from './components/Arrow'

export default function Home() {
  const handleClick = () => {
    console.log('clicked')
  }

  const test = {
    top: {
        type: 'title',
        content: 'Happy Anniversary Love!'
    },
    mid: {
        type: 'text',
        content: 'Just a test for now'
    },
    btm: {
        type: 'pic',
        content: 'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png'
    }
  }

  const top = test.top;
  const mid = test.mid;
  const btm = test.btm;

  return (
    <main className={styles.main}>
      <a onClick={handleClick}>
        <div className={styles.rightArrow}>
            <Arrow />
        </div>
      </a>
      <Card {...{top, mid, btm}} />
    </main>
  )
}
