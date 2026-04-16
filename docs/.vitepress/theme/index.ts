// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import TechBadge from './components/TechBadge.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import WorkTimeline from './components/WorkTimeline.vue'
import TechStack from './components/TechStack.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    app.component('TechBadge', TechBadge)
    app.component('ProjectGrid', ProjectGrid)
    app.component('WorkTimeline', WorkTimeline)
    app.component('TechStack', TechStack)
  }
} satisfies Theme
