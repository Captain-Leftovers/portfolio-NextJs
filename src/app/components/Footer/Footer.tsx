import Link from 'next/link'
import styles from './footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className={styles.buildWith} >Build With <span className={styles.heart}>&#9825;</span>by&nbsp;<span className={styles.myName} >BeeOnDWeb</span></div>
        <Link href="/">Say hello</Link>
    </footer>
  )
}