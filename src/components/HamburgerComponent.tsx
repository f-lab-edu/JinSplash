import React from 'react'
import { styled } from 'styled-components'
import BurgerMenuIcon from './BurgerMenuIcon'

export default function HamburgerComponent() {
	return (
		<Hamburger>
			<HamburgerIcon>
				<BurgerMenuIcon />
			</HamburgerIcon>
		</Hamburger>
	)
}

const Hamburger = styled.div`
	line-height: 30px;
	padding: 0 11px;
	text-align: center;
	display: flex;
	align-items: center;
`

const HamburgerIcon = styled.button`
	height: 100%;
	color: #767676;
	line-height: 1;
	padding-left: 4px;
	padding-right: 4px;
	transition: color 0.1s ease-in-out;
	vertical-align: middle;
	border: none;
	cursor: pointer;
`
