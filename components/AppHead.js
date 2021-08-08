// Packages
import React from "react"
import Head from "next/head"

// Data
import SiteData from "./data/SiteData"

export default function AppHead(props) {
    const Og = [
        {
            Property: "og:type",
            Content: SiteData.Type,
        },
        {
            Property: "og:site_name",
            Content: SiteData.Title,
        },
        {
            Property: "og:locale",
            Content: SiteData.Language,
        },
    ]

    return (
        <Head>
            <title>
                {props.title} | {SiteData.Title}
            </title>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={props.description} />
            <meta name="author" content={SiteData.Author} />
            <meta
                name="keywords"
                content={SiteData.Keywords + props.keywords}
            />
            <meta property="og:title" content={props.title} />
            <meta
                property="og:url"
                content={
                    props.title === "Home"
                        ? SiteData.Url
                        : `${SiteData.Url}/projects/${props.title
                              .toLowerCase()
                              .replace(" ", "-")}`
                }
            />
            <meta
                property="og:image"
                content={props.title === "Home" ? SiteData.Cover : props.cover}
            />
            {Og.map(({ Property, Content }) => (
                <meta property={Property} content={Content} key={Property} />
            ))}
            <link href={`/${SiteData.Favicon}`} rel="shortcut icon" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
        </Head>
    )
}
