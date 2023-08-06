import Link from 'next/link'
import { styled } from 'styled-components'

export default function LogoComponent() {
	return (
		<Logo>
			<Link href={'/'}>
				<LogoImg src="/img/unsplash_favicon.png"></LogoImg>
			</Link>
		</Logo>
	)
}

const Logo = styled.div`
	color: blue;
	align-items: center;
	display: flex;
`

const LogoImg = styled.img`
	width: 35px;
	height: 35px;
`
