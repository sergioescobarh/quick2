import { Inter } from 'next/font/google'
import Button from '../atoms/Button'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='homeMain'>
      <img className='logo' src="https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/83223e5f-6e3f-4811-8661-ff56eca4878b/Leonardo_Creative_logo_of_a_modern_web_app_called_Quick_3.jpg" alt="" />
      <Button text='log in' link='/LogIn'/>
      <Button text='register' link='/Register'/>
      <Button text='try it' link='/Shores'/>
    </main>
  )
}
