import Head from 'next/head'
import Layout from '../components/layout.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Slingshot</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/sequel-sans-regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/sequel-black-65.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/sequel-sans-bold.ttf"
            as="font"
            crossOrigin=""
          />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join the waitlist for Slingshot"
        />
        <meta name="og:title" content="Slingshot" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Layout></Layout>
    </>
  )
}
