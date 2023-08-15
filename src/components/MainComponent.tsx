import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import GridImgComponent from './GridImgComponent'

export default function MainComponent() {
	const [responseData, setResponseData] = useState<null | []>(null)
	const fetchRequest = async () => {
		const response = await fetch(
			`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
		)
		const responseJson = await response.json()
		setResponseData(responseJson)
	}
	useEffect(() => {
		fetchRequest()
	}, [])
	// console.log(responseData)

	return (
		<JinspalshImgContainer>
			<JinsplashImgWrapper>
				<JinspalshImgBox>
					<GridBox>
						<GridItemWrapper>
							{responseData?.map((data, key) => (
								<GridImgComponent data={data} key={key} />
							))}
						</GridItemWrapper>
						<GridItemWrapper>
							{responseData?.map((data, key) => (
								<GridImgComponent data={data} key={key} />
							))}
						</GridItemWrapper>
						<GridItemWrapper>
							{responseData?.map((data, key) => (
								<GridImgComponent data={data} key={key} />
							))}
						</GridItemWrapper>
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
	row-gap: 24px;
`

const GridItemWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	row-gap: 24px;
`
