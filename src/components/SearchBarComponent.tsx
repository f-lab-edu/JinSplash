import { styled } from 'styled-components'
import LinkListComponent from './LinkListComponent'

export default function SearchBarComponent() {
	return (
		<SearchBar>
			<SearchBarForm method="get" aria-label="사이트 전체에서 이미지 찾기">
				<SearchBarInputBox
					type="text"
					placeholder="고해상도 이미지 검색"
				></SearchBarInputBox>
				<Listbox></Listbox>
			</SearchBarForm>
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
	width: 100%; // Default width
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

const SearchBarInputBox = styled.input`
	width: 100%;
	background: none;
	border: none;
	color: #111;
	line-height: inherit;
`

const Listbox = styled.div``
