import { CSSProperties } from 'react'
import styles from './label.module.css'

type Props = {
	text: string
	className?: CSSProperties
}

export default function Label({ text, className }: Props) {
	return (
		<div className={styles.pos} style={className} >
			<div className={styles.container}>
				<span className={styles.x}>+</span>
				<span className={styles.textSpan}>
					<p>{text}</p>
				</span>
			</div>
		</div>
	)
}
