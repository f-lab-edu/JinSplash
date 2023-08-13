import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import GridImgComponent from './GridImgComponent'

export default function MainComponent() {
	const [testUrl, setTestUrl] = useState('')
	const [testHref, setHref] = useState('')
	const [responseData, setResponseData] = useState(null)

	const fetchRequest = async () => {
		const response = await fetch(
			`https://api.unsplash.com/photos/random/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
		)
		const responseJson = await response.json()
		setResponseData(responseJson)
		setHref(responseJson.urls.regular)
		setTestUrl(responseJson.urls.small)
	}
	useEffect(() => {
		fetchRequest()
	}, [])
	console.log(responseData)

	return (
		<JinspalshImgContainer>
			<JinsplashImgWrapper>
				<JinspalshImgBox>
					<GridBox>
						<GridItems>
							{responseData && <GridImgComponent data={responseData} />}
						</GridItems>
						<GridItems>
							{responseData && <GridImgComponent data={responseData} />}
						</GridItems>
						<GridItems>
							{responseData && <GridImgComponent data={responseData} />}
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
