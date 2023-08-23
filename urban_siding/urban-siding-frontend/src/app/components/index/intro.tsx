import React from 'react'
import styles from '@/app/styles/intro.module.scss'

export default function Intro() {
  return (
    <section id={styles.intro}>
      <div className={`container ${styles.wrapper}`}>
        <h1 className={styles.header}>Crafting Dreams, One Siding at a Time</h1>
        <p className={styles.paragraph}>
          The official home owners choice for siding installation.
        </p>
        <button className={`button ${styles.cta__btn}`}>
          REQUEST QUOTE
        </button>
      </div>
    </section>
  )
}
