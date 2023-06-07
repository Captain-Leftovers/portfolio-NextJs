import { CircularSVG } from '../icons/icons'
import styles from './hireMe.module.css'

export default function HireMe() {
  return (
    <div className={styles.hireMe} >
        <div className={styles.svgContainer}>
            <CircularSVG />
        </div>
    </div>
  )
}