import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

export default function MainComponent() {
	const [testUrl, setTestUrl] = useState('')
	const [testHref, setHref] = useState('')

	const fetchRequest = async () => {
		const response = await fetch(
			`https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
		)
		const responseJson = await response.json()
		setHref(responseJson.urls.regular)
		setTestUrl(responseJson.urls.small)
		console.log(responseJson)
	}

	console.log(testUrl)
	useEffect(() => {
		fetchRequest()
	}, [])

	return (
		<JinspalshImgContainer>
			<JinsplashImgWrapper>
				<JinspalshImgBox>
					<GridBox>
						<GridItems>
							<GirdItemStyleLink href={testHref}>
								<GridItemImg>
									<ImgStyled src={testUrl}></ImgStyled>
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
