import Image from 'next/image'
import React from 'react'
import { styled } from 'styled-components'
import SearchBarComponent from './SearchBarComponent'

export default function ArticleComponent() {
	return (
		<ArticleContainer>
			<ArticleWrapper>
				<ArticleBackGroundImgBox>
					<ArticleBackGroundImg>
						<Image
							src={'/img/backgroundImg.avif'}
							alt="background-image"
							layout="fill"
							objectFit="cover"
						></Image>
					</ArticleBackGroundImg>
				</ArticleBackGroundImgBox>
				<ArticleDescWrapper>
					<ArticleDescBox>
						<MainDescBox>
							<MainDesc>
								<DescTitle>Unsplash</DescTitle>
								<DescSubTitle>
									<SubTitle>인터넷의 시각 자료 출처입니다.</SubTitle>
									<SubTitleDesc>
										모든 지역에 있는 크리에이터들의 지원을 받습니다.
									</SubTitleDesc>
									<SearchBarComponent />
								</DescSubTitle>
							</MainDesc>
						</MainDescBox>
						<SubDescBox>
							<Photographer>사진작가 : Jin</Photographer>
							<License>Unsplash 라이센스에 대해 자세히 보기</License>
						</SubDescBox>
					</ArticleDescBox>
				</ArticleDescWrapper>
			</ArticleWrapper>
		</ArticleContainer>
	)
}

const ArticleContainer = styled.div`
	background-color: #767676;
	color: #fff;
	margin-bottom: 48px;
	height: 485px;
`
const ArticleWrapper = styled.div`
	height: 100%;
	position: relative;
`

const ArticleBackGroundImgBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`
const ArticleBackGroundImg = styled.picture`
	position: relative;
	display: block;
	height: 100%;
	z-index: 0;
`
const ArticleDescWrapper = styled.div`
	position: relative;
	height: 100%;
`
const ArticleDescBox = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`
const MainDescBox = styled.div`
	width: 100%;
	max-width: 1320px;
	padding: 0 20px;
	margin-bottom: auto;
	margin-top: auto;
`
const MainDesc = styled.div`
	width: 66.6%;
	margin: 0 auto;
`
const DescTitle = styled.span`
	font-weight: 700;
	font-size: 46px;
	line-height: 1.2;
	margin-bottom: 16px;
`

const DescSubTitle = styled.div``

const SubTitle = styled.h1`
	margin-bottom: 0;
	margin-top: 16px;
	font-weigth: 400;
	font-size: 18px;
`
const SubTitleDesc = styled.p`
	font-weigth: 400;
	font-size: 18px;
	margin-bottom: 16px;
`

const SubDescBox = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	align-items: flex-end;
	padding: 20px;
	padding-top: 0;
	color: #ffffff8c;
	text-shadow: 0 1px 8px #0000001a;
	font-size: 13px;
`
const Photographer = styled.div``
const License = styled.div``
