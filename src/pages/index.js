import Head from 'next/head'
import Titlepage from '../components/UI/Title/TitlePage'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next Apppp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Titlepage title="home"/>
      </main>
    </div>
  )
}
