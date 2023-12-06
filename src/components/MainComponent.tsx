import React, { use, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import GridImgComponent from './GridImgComponent'

interface UrlsType {
	raw: string
	full: string
	regular: string
	small: string
	thumb: string
}

interface ApiResponse {
	alt_description: string
	blur_hash: string
	color: string
	created_at: string
	height: number
	id: string
	promoted_at: string
	slug: string
	urls: UrlsType
	width: number
}

export default function MainComponent() {
	const [responseData, setResponseData] = useState<null | [ApiResponse]>(null)
	const [measuredImgHeight, setMeasuredHeight] = useState<number[]>([0, 0, 0])

	const fetchRequest = async () => {
		console.log('data를 fetch합니다.')
		const response = await fetch(
			`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`,
		)
		const responseJson = await response.json()
		setResponseData((prevData) =>
			prevData ? [...prevData, ...responseJson] : responseJson,
		)
	}

	const calculateHeight = () => {
		let imgHeightData = []
		let spliceData = []
		if (responseData) {
			for (let i = 0; i < responseData.length; i++) {
				imgHeightData.push(responseData[i].height)
			}
		}
		for (let j = 0; j <= imgHeightData.length; j++) {
			spliceData.push(imgHeightData.splice(0, 3))
		}

		// console.log(spliceData)
	}
	calculateHeight()

	// 첫 이미지 렌더링
	useEffect(() => {
		const initFetch = async () => {
			try {
				await fetchRequest()
			} catch (error) {
				console.error('데이터 로드 중 에러 발생 : ', error)
			}
		}
		initFetch()
	}, [])

	// 스크롤 이벤트 리스너
	useEffect(() => {
		const onScroll = () => {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				fetchRequest()
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => window.removeEventListener('scroll', onScroll)
	}, [responseData])

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
