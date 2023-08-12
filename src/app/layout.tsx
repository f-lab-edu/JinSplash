'use client'
import { createGlobalStyle } from 'styled-components'
import StyledComponentsRegistry from './registry'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ko">
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}

const GlobalStyles = createGlobalStyle` 
a{
    text-decoration: none;
    color: inherit;
}
*{
    box-sizing: border-box;
}
input, textarea { 
  -moz-user-select: auto;
  -webkit-user-select: auto;
  -ms-user-select: auto;
  user-select: auto;
}
input:focus {
  outline: none;
}

button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

ol, ul {
	list-style: none;
}

body {
	color: #111;
	font-size: 15px;
	font-weight: 400;
	line-height: 1.6;
}
`
