import { styled } from 'styled-components'
import LinkListComponent from './LinkListComponent'
import SearchBarComponent from './SearchBarComponent'

export default function SearchComponent() {
	return (
		<SearchBar>
			<SearchBarComponent />
			<Listbox></Listbox>
			<LinkListComponent />
		</SearchBar>
	)
}

const SearchBar = styled.div`
	display: flex;
	flex-grow: 1;
	margin-left: 20px;
	justify-content: space-between;
	align-items: center;
	color: black;
`
const SearchBarForm = styled.form`
	width: 100%;
	display: flex;
	flex-grow: 1;
	height: 40px;
	color: black;
	background-color: #eee;
	border: 1px solid #0000;
	border-radius: 24px;

	@media (min-width: 768px) {
		width: 70%;
	}

	@media (min-width: 1024px) {
		width: 50%;
	}
`

const Listbox = styled.div``
