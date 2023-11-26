
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        
        {children}
      </body>
    </html>
  )
}
