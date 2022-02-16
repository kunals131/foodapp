import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Pizza delivery app in India</title>
        <meta name="description" content="Best Pizza in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Homepage</div>
</div>
  )
}
