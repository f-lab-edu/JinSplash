import { styled } from 'styled-components'

export default function LinkListComponent() {
	return (
		<LinkListBox>
			<LinkLists>
				<LinkList>탐색</LinkList>
				<LinkList>블로그</LinkList>
				<LinkList>Unsplash+</LinkList>
			</LinkLists>
		</LinkListBox>
	)
}

const LinkListBox = styled.div`
	display: flex;
	margin-left: 2rem;
	align-items: center;
	border-right: 1px solid black;
`

const LinkLists = styled.ul`
	display: flex;
`

const LinkList = styled.li`
	list-style: none;
	margin-right: 1rem;

	&:last-child {
		background: linear-gradient(135deg, #fa00ff, #00e0ff 50%, #fa00ff);
	}
`
