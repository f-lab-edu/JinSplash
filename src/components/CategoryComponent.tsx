import { styled } from 'styled-components'
import React from 'react'

export default function CategoryComponent() {
	return (
		<CategoryContainer>
			<CategoryWrapper>
				<CategoryBox>
					<SubscribeUserCategoryList>
						<ListBox>
							<List></List>
						</ListBox>
					</SubscribeUserCategoryList>
					<CategoryList>
						<ListBox>
							<List></List>
						</ListBox>
					</CategoryList>
				</CategoryBox>
			</CategoryWrapper>
		</CategoryContainer>
	)
}

const CategoryContainer = styled.div``
const CategoryWrapper = styled.div``
const CategoryBox = styled.div``
const SubscribeUserCategoryList = styled.div``
const CategoryList = styled.div``

const ListBox = styled.ul``

const List = styled.li``
