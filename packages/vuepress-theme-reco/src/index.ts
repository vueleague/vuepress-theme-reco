import type { Theme, ThemeConfig } from '@vuepress/core'
import { path } from '@vuepress/utils'
import { getRecoConfig, resolveRecoConfigPath } from './utils'

const { type } = getRecoConfig(resolveRecoConfigPath())

export const recoTheme: Theme<ThemeConfig> = ({
  themePlugins = {},
  ...localeOptions
}) => {
  return {
    name: 'vuepress-theme-reco',
    layouts: path.resolve(process.cwd(), `node_modules/${type}/lib/layouts`),
    plugins: [
      [
        '@vuepress-reco/blog',
        {
          frontmatters: [
            {
              path: '/tag/',
              layout: 'Tags',
            },
            {
              id: 'categories',
              keys: ['categories'],
              path: '/categories/',
              layout: 'Categories',
              scopeLayout: 'Category',
            },
            {
              id: 'timeline',
              keys: ['timeline'],
              path: '/timeline/',
              layout: 'TimeLines',
              scopeLayout: 'TimeLine',
            },
          ],
        },
      ],
    ],
  }
}

export default recoTheme
