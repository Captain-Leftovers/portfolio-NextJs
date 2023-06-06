import styles from './label.module.css'

export default function Label() {
	return (
		<div className={styles.container}>
			<span className={styles.x}>+</span>
			<span className={styles.textSpan}>
				<p>
					ATTENTION
					<br />
					TO DETAIL
				</p>
			</span>
		</div>
	)
}
