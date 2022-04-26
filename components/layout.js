import { Fragment } from "react"
import Header from "./Header"
import Footer from "./footer"
import Head from 'next/head'

export default function Layout ({ preview, children }) {
    return (
        <>
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="min-h-screen flex flex-col h-screen justify-between">
            <Header />
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                {children}
            </main>
            <Footer />
        </div>
      </>
        
    )
}

