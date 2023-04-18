import style from '../styles/Home.module.css'
import Box from '@/components/Box/Box'
import Form from '@/components/form/Form'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome B...</h1>
      <div className={style.main}>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>

  )
}
