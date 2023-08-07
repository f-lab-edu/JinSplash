import { styled } from 'styled-components'
import React from 'react'
import Link from 'next/link'

export default function CategoryComponent() {
	return (
		<CategoryContainer>
			<CategoryWrapper>
				<CategoryBox>
					<SubscribeUserCategoryList>
						<ListBox>
							<List>
								<StyledLink href={'/'}>보도/편집 전용</StyledLink>
							</List>
							<List>
								<StyledLink href={'/'}>팔로잉</StyledLink>
							</List>
							<List>
								<StyledLink href={'/'}>Unsplash+</StyledLink>
							</List>
						</ListBox>
					</SubscribeUserCategoryList>
					<LineBar></LineBar>
					<CategoryList>
						<ListBox>
							<List>
								<StyledLink href={'/'}>파랑</StyledLink>
							</List>
							<List>
								<StyledLink href={'/'}>호수</StyledLink>
							</List>
							<List>
								<StyledLink href={'/'}>배경 화면</StyledLink>
							</List>
							<List>
								<StyledLink href={'/'}>3D 렌더링</StyledLink>
							</List>
						</ListBox>
					</CategoryList>
				</CategoryBox>
			</CategoryWrapper>
		</CategoryContainer>
	)
}

const CategoryContainer = styled.div`
	position: sticky;
	top: 80;
	width: 100%;
	z-index: 2;
`
const CategoryWrapper = styled.div`
	padding: 0 20px;
	box-shadow:
		0 4px 12px #00000014,
		0 0 1px #0100001a;
`
const CategoryBox = styled.div`
	column-gap: 24px;
	display: flex;
	align-items: center;
`

const LineBar = styled.div`
	background-color: #d1d1d1;
	height: 32px;
	width: 1px;
`

const SubscribeUserCategoryList = styled.div``
const CategoryList = styled.div``

const ListBox = styled.ul`
	display: flex;
	align-items: center;
	column-gap: 24px;
`

const List = styled.li``

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	height: 56px;
`
