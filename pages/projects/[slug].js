// Components
import Wrapper from "../../components/layouts/Wrapper"
import Cover from "../../components/projects/Cover"
import Container from "../../components/projects/Container"
import Next from "../../components/projects/Next"
import Intro from "../../components/projects/Intro"
import Section from "../../components/projects/Section"

// MDX components
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

// Projects components
import { List } from "../../components/styles/Fonts"
import LinkBehance from "../../components/projects/LinkBehance"
import Fade from "../../components/ui/Fade"

// Import all components used in MDX files here
const components = { List, LinkBehance, Section, Fade }

export default function Posts({ source, frontMatter }) {
    const content = hydrate(source, { components })
    return (
        <Wrapper
            title={frontMatter.title}
            description={frontMatter.description}
            keywords={frontMatter.keywords}
            cover={frontMatter.cover}
        >
            <Cover
                title={frontMatter.title}
                cover={frontMatter.cover}
                subtitle={frontMatter.subtitle}
                position={frontMatter.position}
                city={frontMatter.city}
            />

            <Container>
                <Intro skills={frontMatter.skills} dates={frontMatter.dates} />
                {content}
            </Container>

            <Next href={`/projects/${frontMatter.nextProject}`} />
        </Wrapper>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    const postContent = await getPostdata(params.slug)
    const { data, content } = matter(postContent)
    const mdxSource = await renderToString(content, {
        components,
        scope: data,
    })
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}
