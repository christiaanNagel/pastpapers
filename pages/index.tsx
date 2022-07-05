import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Past Papers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='text-2xl text-black shadow-lg w-400 h-400 bg-blue-500 '>Text</div>
      </main>
    </div>
  )
}

export default Home
