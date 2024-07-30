import React from 'react'
import { useRouter } from "next/router"
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h1 className='nx-font-bold'>Javascript Leetcode</h1>,
  project: {
    link: 'https://github.com/gavinleige/leetcode',
  },
  docsRepositoryBase: 'https://github.com/gavinleige/leetcode/tree/main',
  footer: {
    text: (<span>{new Date().getFullYear()} © <a href="https://gavinleige.com" target='_blank'>GavinLeige</a></span>),
  },
  head(props) {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Javascript Leetcode",
      };
    }

    return {
      titleTemplate: "%s - Javascript Leetcode",
    };
  },
}

export default config
