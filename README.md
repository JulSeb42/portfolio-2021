A simple starter project for Next.js, using styled-components and MDX.

## DO NOT UPDATE `next-mdx-remote` on 3.0

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Installed packages

`npm i node-sass`: Sass package.

`npm i gray-matter`: To use frontmatter content.

`npm i @next/mdx`: To use React components in Markdown files.

`npm i next-mdx-remote`: To convert MDX to HTML, create pages and load files.

`npm i styled-components`: Styled components, for CSS in JS.

`npm i react-svg`: Fetch and display SVG files.

## Included components

`Containers/Wrapper`: Basic elements contained in every pages.

`Containers/Container`: Main element of the page.

`Header/Header`: Header for every pages, included in the Wrapper.

`Footer/Footer`: Footer for every pages, included in the Wrapper.

`Social/Social`: Social links for your projects. Add all the links you have there.

`UI/Logo`: Logo link pointing to homepage. 

`UI/ImageFix`: Component to fix bugs from `next/image`.

`UI/LinkFix`: Component to fix bugs with styled `next/link`.

`UI/Icon`: Component to display SVG images as icons.

`AppHead`: All elements contained in the `<head>` of your page.

`Breakpoints`: Media queries for styled-components.

`SiteData`: Your project's data. Eg: `siteName`, `siteEmail`, etc.

## Global styles

The global styles are included inside the folder `/styles/` in SCSS files. Here you can find the CSS variables used in your project, some SCSS mixins, helpers classes and font styles.