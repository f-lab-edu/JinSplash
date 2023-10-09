import React from 'react'
import { styled } from 'styled-components'

interface GirdImgProps {
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

interface UrlsType {
	raw: string
	full: string
	regular: string
	small: string
	thumb: string
}

export default function GridImgComponent({ data }: { data: GirdImgProps }) {
	return (
		<GirdItemStyleLink href={data.urls.regular}>
			<GridItemImg>
				<ImgStyled src={data.urls.small} alt={data.alt_description}></ImgStyled>
			</GridItemImg>
		</GirdItemStyleLink>
	)
}

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
