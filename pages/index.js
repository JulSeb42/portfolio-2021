// Packages
import React from "react"
import styled from "styled-components"

// Components
import Wrapper from "../components/layouts/Wrapper"
import List from "../components/home/List"
import Card from "../components/home/Card"

// Content
import UiTexts from "../components/data/UiText"
import SiteData from "../components/data/SiteData"

// Blog
import { getSortedPosts } from "../lib/posts"

// Styles
const Hidden = styled.h1`
    position: fixed;
    top: -999em;
    left: -999em;
`

export default function Home({ allPostsData }) {
    return (
        <Wrapper
            title={UiTexts.TitleHome}
            description={UiTexts.DescHome}
            keywords={UiTexts.KeywordsHome}
        >
            <Hidden>
                {SiteData.Title} | {UiTexts.TitleHome}
            </Hidden>
            
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
