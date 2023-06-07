import styles from './page.module.css'
import type { Metadata } from 'next'
import HeroImage from './components/HeroImage/HeroImage'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}


export default function Home() {

	return <main className={styles.main}>
    
    <HeroImage />
    //TODO : add resume download page
    //TODO : add about me page
    //TODO : add contact me page
    //TODO : add projects page
    //TODO : add footer
    
  </main>

}
