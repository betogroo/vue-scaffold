import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { APP_TITLE } from '@/config'
export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  document.title = `${APP_TITLE} - ${to.meta.title}`
  next()
}
