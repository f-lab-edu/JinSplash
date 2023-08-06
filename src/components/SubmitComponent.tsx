import Link from 'next/link'
import React from 'react'
import { styled } from 'styled-components'

export default function SubmitComponent() {
	return (
		<SubmitBox>
			<LoginBox>
				<Link href={'/'}>로그인</Link>
			</LoginBox>
			<PhotoSubmitBox>사진 제출</PhotoSubmitBox>
		</SubmitBox>
	)
}

const SubmitBox = styled.div`
	display: flex;
	align-items: center;
	column-gap: 8px;
`

const LoginBox = styled.div`
	color: #767676;
	font-size: 14px;
	line-height: 30px;
	padding: 0 11px;
	text-decoration: none;
	transition: all 0.1s ease-in-out;
`

const PhotoSubmitBox = styled.button`
	background-color: #fff;
	border: 1px solid #d1d1d1;
	border-radius: 4px;
	text-align: center;
	color: #767676;
	font-size: 14px;
	height: 32px;
	line-height: 30px;
	padding: 0 11px;
	box-shadow: 0 1px 1px #0000000a;
`
