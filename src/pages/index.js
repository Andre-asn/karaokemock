import { Inter } from '@next/font/google'
import Sidebar from './sidebar.js'
import FrontHeader from './frontheader.js'
import FoodList from './foodlist.js'
import Staff from './about.js'
import Gallery from './gallery.js'
import Contact from './contact.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="flex">
    <Sidebar />
        <main>
          <FrontHeader/>
          <Staff/>
          <FoodList />
          <Gallery />
          <Contact />
      </main>
    </div>
    </>
  )
}