import styles from './page.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}


export default function Home() {

	return <main className={styles.main}>
     <p>Home Component</p>
    <div>
      <Link href="/about">About</Link>
    </div>
  </main>

}
