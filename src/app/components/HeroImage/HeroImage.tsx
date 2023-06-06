import Image from 'next/image'
import syles from './heroImage.module.css'

export default function HeroImage() {
	return (
		<div
			style={{
				width: '30%',
				height: '60%',
				position: 'relative',
			}}
		>
			<Image
				src="photo-mark.svg"
				alt="heroImage"
				fill
                priority
				style={{ objectFit: 'contain' }}
			/>
		</div>
	)
}
