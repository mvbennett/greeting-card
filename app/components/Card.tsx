'use client'
import styles from '../page.module.css'
import Arrow from './Arrow';

const Card = () => {
    return (
        <div className={styles.card}>
            <div id="top">
                <h1>
                    Happy Anniversary Love!
                </h1>
            </div>
            <div id="mid">
                <p>
                    Just a test for now
                </p>
            </div>
            <div id="btm"></div>
        </div>
    )
}

export default Card;