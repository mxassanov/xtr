export default function ({ app, store }) {
  app.router.beforeEach((to, from, next) => {
    store.commit('setSection', 1)
    next()
  })
}
