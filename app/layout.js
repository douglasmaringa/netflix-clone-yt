import { Poppins } from 'next/font/google'
import {Providers} from "./providers";
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: 'Seffa Flix',
  description: 'Seffa Flix is a streaming service that offers a wide variety of award-winning, movies and more on thousands of internet-connected devices.',
  icons:{
    icon: '/favicon.ico',
  }

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
