'use client'

import ArticleComponent from '@/components/ArticleComponent'
import CategoryComponent from '@/components/CategoryComponent'
import HeaderComponent from '@/components/HeaderComponent'
import MainComponent from '@/components/MainComponent'

export default function Home() {
	return (
		<>
			<HeaderComponent />
			<CategoryComponent />
			<ArticleComponent />
			<MainComponent />
		</>
	)
}
