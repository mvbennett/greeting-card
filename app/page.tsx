'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Card from './components/Card'
import Arrow from './components/Arrow'
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState(1);

  const rightClick = () => {
    if (page < 3) {
      setPage(page + 1);
    }
    console.log(page)
  }

  const leftClick = () => {
    if (page > 1) {
      setPage(page - 1)
    }
    console.log(page)
  }

  const test = [
    {
      top: {
          type: 'title',
          content: 'Happy Anniversary Love!'
      },
      mid: {
          type: 'pic',
          content: 'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png'
      },
      btm: {

      }
    },
    {
      top: {
        type: 'title',
        content: 'Page 2, woohoo'
      },
      mid: {
          type: 'text',
          content: 'Hey so Ive been working on this for a while love so I hope you like it.'
      },
      btm: {

      }
    },
    {
      top: {

      },
      mid: {
          
      },
      btm: {
        type: 'pic',
        content: 'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png'
      }
    }
  ]

  const top: any = test[page - 1].top;
  const mid = test[page - 1].mid;
  const btm = test[page - 1].btm;

  return (
    <main className={styles.main}>
      {
        page > 2 ?
        <></>
        :
        <a onClick={rightClick}>
          <div className={styles.rightArrow}>
              <Arrow />
          </div>
        </a>
      }
      {
        page < 2 ?
        <></>
        :
        <a onClick={leftClick}>
          <div className={styles.leftArrow}>
              <Arrow />
          </div>
        </a>
      }
      <Card {...{top, mid, btm}} />
    </main>
  )
}
