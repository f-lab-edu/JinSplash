import React from 'react'
import { styled } from 'styled-components'

export default function MainComponent() {
	return (
		<JinspalshImgContainer>
			<JinsplashImgWrapper>
				<JinspalshImgBox>
					<GridBox>
						<GridItems>
							<GirdItemStyleLink>
								<GridItemImg>
									<ImgStyled src="/img/testImg.jpeg"></ImgStyled>
								</GridItemImg>
							</GirdItemStyleLink>
						</GridItems>
						<GridItems>
							<GirdItemStyleLink>
								<GridItemImg>
									<ImgStyled src="/img/testImg.jpeg"></ImgStyled>
								</GridItemImg>
							</GirdItemStyleLink>
						</GridItems>
						<GridItems>
							<GirdItemStyleLink>
								<GridItemImg>
									<ImgStyled src="/img/testImg.jpeg"></ImgStyled>
								</GridItemImg>
							</GirdItemStyleLink>
						</GridItems>
					</GridBox>
				</JinspalshImgBox>
			</JinsplashImgWrapper>
		</JinspalshImgContainer>
	)
}

const JinspalshImgContainer = styled.div``
const JinsplashImgWrapper = styled.div`
	max-width: 1320px;
	margin: auto;
	padding: 0 20px;
`

const JinspalshImgBox = styled.div``
const GridBox = styled.div`
	display: grid;
	align-items: start;
	grid-column-gap: 24px;
	grid-template-columns: repeat(3, minmax(0, 1fr));
`

const GridItems = styled.div`
	position: relative;
`

const GirdItemStyleLink = styled.a`
	cursor: zoom-in;
`
const GridItemImg = styled.div`
	display: block;
	height: 100%;
	position: relative;
`
const ImgStyled = styled.img`
	width: 100%;
	vertical-align: middle;
	border-style: none;
	overflow: clip;
`
