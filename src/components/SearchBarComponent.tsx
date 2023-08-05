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
	align-items: center;
	color: black;
`
const SearchBarForm = styled.form`
	display: flex;
	height: 40px;
	width: 75rem;
	color: black;
	background-color: #eee;
	border: 1px solid #0000;
	border-radius: 24px;
`

const SearchBarInputBox = styled.input`
	width: 100%;
	background: none;
	border: none;
	color: #111;
	line-height: inherit;
`

const Listbox = styled.div``
