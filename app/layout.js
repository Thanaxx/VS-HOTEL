import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {Open_Sans, Playfair_Display} from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-openSans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  title: 'VS Hotel',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
      className={`${openSans.variable} ${playfair.variable}`}
    >
      <body className='bg-gray'>
        <Navbar />
          <main className='relative overflow-hidden'>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
