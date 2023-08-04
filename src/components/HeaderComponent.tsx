import styled from 'styled-components'
import LogoComponent from './LogoComponent'
import SearchBarComponent from './SearchBarComponent'
import LinkListComponent from './LinkListComponent'
import SubmitComponent from './SubmitComponent'
import HambergerComponent from './HambergerComponent'

export default function HeaderComponent() {
	return (
		<Header>
			<Nav>
				<LogoComponent />
				<SearchBarComponent />
				<LinkListComponent />
				<SubmitComponent />
				<HambergerComponent />
			</Nav>
		</Header>
	)
}

const Header = styled.header`
	position: sticky;
	top: 0;
	text-align: center;
	border: 1px solid black;
`
const Nav = styled.nav`
	height: 62px;
	padding-block: 11px;
	display: flex;
`
