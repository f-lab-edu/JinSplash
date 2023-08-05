import { styled } from 'styled-components'

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
		</SearchBar>
	)
}

const SearchBar = styled.div`
	color: black;
	align-items: center;
	display: flex;
	margin: 0 10px;
`
const SearchBarForm = styled.form`
	display: flex;
	width: 35rem;
	height: 40px;
	color: black;
	background-color: #eee;
	border: 1px solid #0000;
	border-radius: 24px;
`

const SearchBarInputBox = styled.input`
	background: none;
	border: none;
	color: #111;
	line-height: inherit;
`

const Listbox = styled.div``
