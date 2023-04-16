import React from 'react'
import styles from '../../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={styles.userinput}>
        <input type="text" placeholder='Type here' />
        <button>submit</button>
      </div>  
    </footer>
  )
}
