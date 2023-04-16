import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout/Layout'
import Message from '@/components/messages/Message'
const inter = Inter({ subsets: ['latin'] })

// This project is initiated on 16th april 2023

export default function Home() {
  return (
    <>
      <Head>
        <title>Etch Forever</title>
        <meta name="description" content="Blockchain broadcasting site" />
        <meta name="keyword" content='Blockchain,web3,dapp' />
        <meta name="author" content="Prashanth shivann" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Layout>
            <Message />
          </Layout>
      </main>
    </>
  )
}
