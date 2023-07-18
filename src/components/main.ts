import type { App } from 'vue'
import { Sortable } from '@/components'

export default {
  install: (app: App) => {
    app.component('Sortable', Sortable)
  },
}

export { Sortable }
