'use client'
import { createElement } from 'react';
import styles from '../page.module.css'

interface props {
    top: any,
    mid: any,
    btm: any
}

const Card = ({top, mid, btm}: props) => {

    const makeElement = ({type, content}: any) => {
        let element;
        switch (type) {
            case 'title':
                element = createElement('h1', {}, content);
                break;
            case 'text':
                element = createElement('p', {}, content);
                break;
            case 'pic':
                element = createElement('img', {src: content});
                break;
            default:
                break;
        }
        return element;
    }

    const topEl = makeElement(top);
    const midEl = makeElement(mid);
    const btmEl = makeElement(btm);

    return (
        <div className={styles.card}>
            <div id="top" className={styles.cont}>
                {topEl}
            </div>
            <div id="mid" className={styles.cont}>
                {midEl}
            </div>
            <div id="btm" className={styles.cont}>
                {btmEl}
            </div>
        </div>
    )
}

export default Card;