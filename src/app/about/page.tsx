import styles from './about.module.css'
import Link from 'next/link'

type Props = {}
export default function About({}: Props) {
	return (
		<div className={styles.main}>
			<p>About Component</p>
			<Link href="/">Home</Link>
		</div>
	)
}
