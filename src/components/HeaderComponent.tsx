import styled from 'styled-components'
import LogoComponent from './LogoComponent'
import SearchBarComponent from './SearchComponent'
import SubmitComponent from './SubmitComponent'
import HamburgerComponent from './HamburgerComponent'

export default function HeaderComponent() {
	return (
		<Header>
			<Nav>
				<LogoComponent />
				<SearchBarComponent />
				<SubmitComponent />
				<HamburgerComponent />
			</Nav>
		</Header>
	)
}

const Header = styled.header`
	position: sticky;
	top: 0;
	text-align: center;
`
const Nav = styled.nav`
	display: flex;
	justify-content: center;
	height: 62px;
	padding: 0 20px;
	padding-block: 11px;
`
