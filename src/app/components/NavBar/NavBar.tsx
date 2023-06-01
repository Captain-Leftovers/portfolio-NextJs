import Link from 'next/link'
import styles from './NavBar.module.scss'

export default function NavBar() {
	return (
		<header>
			<nav>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
				<Link href="/projects">Projects</Link>
			</nav>
			<nav>
				<Link href="/" target="_blank">
					T
				</Link>
				<Link href="/" target="_blank">
					L
				</Link>{' '}
				<Link href="/" target="_blank">
					G
				</Link>{' '}
				<Link href="/" target="_blank">
					L/D
				</Link>
			</nav>
		</header>
	)
}
