import React from 'react'
import { styled } from 'styled-components'

export default function SearchBarComponent() {
	return (
		<SearchBarForm method="get" aria-label="사이트 전체에서 이미지 찾기">
			<SearchBarInputBox
				type="text"
				placeholder="고해상도 이미지 검색"
			></SearchBarInputBox>
		</SearchBarForm>
	)
}

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

const SearchBarInputBox = styled.input`
	width: 100%;
	background: none;
	border: none;
	color: #111;
	line-height: inherit;
	z-index: 9999;
`
