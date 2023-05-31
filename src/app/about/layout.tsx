import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About Layout Metadata',
	description: 'about layout metadata in layout',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}
