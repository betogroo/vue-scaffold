import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
const TITLE = 'Vue Scaffold'
export default (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  document.title = `${TITLE} - ${to.meta.title}`
  next()
}
