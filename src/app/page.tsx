import styles from './page.module.css'
import type { Metadata } from 'next'
import HeroImage from './components/HeroImage/HeroImage'
import Label from './components/Label/Label'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}


export default function Home() {

	return <main className={styles.main}>
    
    {/* <HeroImage /> */}
    <Label />
  </main>

}
