// Packages
import React from "react"

// Components
import Wrapper from "../components/layouts/Wrapper"
import Waves from "../components/home/Waves"
import List from "../components/home/List"
import Card from "../components/home/Card"

// Blog
import { getSortedPosts } from "../lib/posts"

export default function Home({ allPostsData }) {
    return (
        <Wrapper
            title="Home"
            description="Homepage of Julien Sebag's portfolio, UX / UI / Web Designer based in Warsaw, Poland."
            keywords="ux, ui, design, front end, designer, portfolio, warsaw"
        >
            <Waves />

            <List count={allPostsData.length / 2}>
                {allPostsData.map(({ slug, title, position, cover }) => (
                    <Card
                        href="/projects/[slug]"
                        as={`/projects/${slug}`}
                        title={title}
                        subtitle={position}
                        cover={cover}
                        key={slug}
                    />
                ))}
            </List>
        </Wrapper>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPosts()
    return {
        props: {
            allPostsData,
        },
    }
}
