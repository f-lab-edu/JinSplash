import React from 'react'
import { styled } from 'styled-components'

export default function HambergerComponent() {
	return <Hamberger>Hamberger bar</Hamberger>
}

const Hamberger = styled.div`
	line-height: 30px;
	padding: 0 11px;
	text-align: center;
	display: flex;
	align-items: center;
`
