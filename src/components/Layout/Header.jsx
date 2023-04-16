import React from 'react'
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header>
        <div className={styles.header}>
            <div className = {styles.logo}>Etch Forever</div>
            <button type="button" className={styles.connectbutton}>Connect wallet</button>
        </div>
    </header>
  )
}
