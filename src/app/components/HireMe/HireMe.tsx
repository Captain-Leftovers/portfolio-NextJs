import Link from 'next/link'
import { CircularSVG } from '../icons/icons'
import styles from './hireMe.module.css'

export default function HireMe() {
  return (
    <div className={styles.hireMe} >
        <div className={styles.svgContainer}>
            <CircularSVG />
            <Link href="/" className={styles.hireLink} >Hire Me</Link>
        </div>
    </div>
  )
}

//TODO : Add a link to the contact page or email me directly