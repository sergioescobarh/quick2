import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='homeMain'>
      <div className='buttonContainer'>
        <div className='buttonBorder'>h</div>
        <button>log in</button>
        <div className='buttonBorder'>h</div>
      </div>
      
      <button>register</button>
    </main>
  )
}
