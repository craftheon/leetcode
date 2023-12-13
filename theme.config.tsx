import React from 'react'
import { useRouter } from "next/router"
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <h1 className='nx-font-bold'>Javascript Leetcode</h1>,
  project: {
    link: 'https://github.com/yuangwei/leetcode',
  },
  docsRepositoryBase: 'https://yuangwei.com',
  footer: {
    text: 'Copyright © 2023 Yuang Wei',
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Javascript Leetcode",
      };
    }

    return {
      titleTemplate: "%s - Javascript - Leetcode",
    };
  },
}

export default config
