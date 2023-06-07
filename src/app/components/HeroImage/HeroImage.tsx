import Image from 'next/image'
import syles from './heroImage.module.css'
import Label from '../Label/Label'

const cssLabelOne = {
	top: '50px',
	left: '40px',
	zIndex: 10,
	transform: 'rotate(-30deg)',
}

const cssLabelTwo = {
	top: '195px',
	left: '0px',
	zIndex: 0,
	transform: 'rotate(-10deg)',
}

const cssLabelThree = {
	top: '315px',
	left: '-20px',
	zIndex: 5,
	transform: 'rotate(0deg)',
}

const cssLabelFour = {
	top: '450px',
	left: '0px',
	zIndex: 0,
	transform: 'rotate(35deg)',
}

const cssLabelFive = {
	top: '480px',
	left: '190px',
	zIndex: 10,
	transform: 'rotate(0deg)',
}

const cssLabelSix = {
	top: '440px',
	left: '380px',
	zIndex: 10,
	transform: 'rotate(25deg)',
}
const cssLabelSeven = {
	top: '50px',
	left: '330px',
	zIndex: 0,
	transform: 'rotate(35deg)',
}
const cssLabelEight = {
	top: '330px',
	left: '380px',
	zIndex: 10,
	transform: 'rotate(-25deg)',
}

const cssLabelNine = {
	top: '200px',
	left: '380px',
	zIndex: 1,
	transform: 'rotate(25deg)',
}

export default function HeroImage() {
	return (
		<div className={syles.imgCon}>
			<Label
				text={'ATTENTION\nTO-DETAIL'}
				className={cssLabelOne}
			/>
			<Label
				text={'FULLSTACK\nDEVELOPER'}
				className={cssLabelTwo}
			/>
			<Label
				text={'TEAM\nORIENTED'}
				className={cssLabelThree}
			/>
			<Label
				text={'RESPONSIVE\nDESIGN'}
				className={cssLabelFour}
			/>
			<Label
				text={'ATTENTION\nTO DETAIL'}
				className={cssLabelFive}
			/>
			<Label
				text={'ATTENTION\nTO DETAIL'}
				className={cssLabelSix}
			/>
			<Label
				text={'ATTENTION\nTO DETAIL'}
				className={cssLabelSeven}
			/>
			<Label
				text={'ATTENTION\nTO DETAIL'}
				className={cssLabelEight}
			/>
			<Label
				text={'ATTENTION\nTO DETAIL'}
				className={cssLabelNine}
			/>

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
