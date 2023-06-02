'use client'

import Link from 'next/link'
import { motion } from "framer-motion"
import styles from './navBar.module.css'
import { usePathname } from 'next/navigation'
import { GithubSVG, LinkedInSVG, TwitterSVG } from '../icons/icons'


export default function NavBar() {
	const pathname = usePathname()

	return (
		<header className={styles.header}>
			<nav>
				<Link
					href="/"
					className={`${styles.navFirst} ${styles.parentLink} `}
				>
					Home
					<span
						className={`${
							styles.spanUnderline
						} ${
							pathname === '/'
								? styles.spanUnderlineActive
								: ''
						}`}
					>
						&nbsp;
					</span>
				</Link>
				<Link
					href="/about"
					className={`${styles.navInBetween} ${styles.parentLink}`}
				>
					About
					<span
						className={`${
							styles.spanUnderline
						} ${
							pathname === '/about'
								? styles.spanUnderlineActive
								: ''
						}`}
					>
						&nbsp;
					</span>
				</Link>
				<Link
					href="/projects"
					className={`${styles.navLast} ${styles.parentLink}`}
				>
					Projects
					<span
						className={`${
							styles.spanUnderline
						} ${
							pathname === '/projects'
								? styles.spanUnderlineActive
								: ''
						}`}
					>
						&nbsp;
					</span>
				</Link>
			</nav>
			<nav className={styles.navIcons}>
				<motion.a
					href="https://twitter.com/BeeondwebIvanov"
					target="_blank"
					className={styles.navFirst}
					whileHover={{y: -2}}
					whileTap={{scale:0.9}}
				>
					<TwitterSVG />
				</motion.a>
				<motion.a
					href="https://www.linkedin.com/in/dobromir-ivanov-710136261/"
					target="_blank"
					className={styles.navInBetween}
					whileHover={{y: -2}}
					whileTap={{scale:0.9}}

				>
					<LinkedInSVG />
				</motion.a>{' '}
				<motion.a
					href="https://github.com/Captain-Leftovers"
					target="_blank"
					className={styles.navInBetween}
					whileHover={{y: -2}}
					whileTap={{scale:0.9}}

				>
					<GithubSVG />
				</motion.a>{' '}
				<a
					href="/"
					target="_blank"
					className={styles.navLast}
				>
					L/D
				</a>
			</nav>
		</header>
	)
}
