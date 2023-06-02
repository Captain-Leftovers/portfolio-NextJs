
import Link from 'next/link'

type Props = {}
export default function About({}: Props) {
	return (
		<div>
			<p>About Component</p>
			<Link href="/">Home</Link>
		</div>
	)
}
