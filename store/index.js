import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

function manageScroll(display, el) {
  if (display) disableBodyScroll(el)
  else enableBodyScroll(el)
}

export const state = () => ({
  indexBgColor: 'black',
  indexCurrentSection: 7,
  indexScrollDirection: 'down',
  isSkipping: false,
  offScroll: false,
  isMenuVisible: false,
  scrollOccured: false,
})

export const mutations = {
  changeBgColor(state, value) {
    state.indexBgColor = value
  },
  setScrollDirection(state, value) {
    state.indexScrollDirection = value
  },
  setOffScroll(state, value) {
    state.offScroll = value
  },
  setSection(state, value) {
    state.indexCurrentSection = value
  },
  setScrollOccured(state, value) {
    state.scrollOccured = value
  },
  toggleMenu(state) {
    state.isMenuVisible = !state.isMenuVisible
    const el = document.querySelector('#menuModal')
    manageScroll(state.isMenuVisible, el)
  },
  setSkipping(state, value) {
    state.isSkipping = value
  },
  closeMenuModal(state) {
    state.isMenuVisible = false
  }
}

export const actions = {
  setSection({ commit, state }, value) {
    if (
      this.$router.history.current.path === '/' &&
      state.indexCurrentSection === 11 &&
      value > state.indexCurrentSection
    )
      return
    if (
      this.$router.history.current.path === '/commerce' &&
      state.indexCurrentSection === 4 &&
      value > state.indexCurrentSection
    )
      return

    if (value === 0) return
    if (value > state.indexCurrentSection) commit('setScrollDirection', 'down')
    else commit('setScrollDirection', 'up')

    if (Math.abs(value - state.indexCurrentSection) > 1) commit('setSkipping', true)
    else commit('setSkipping', false)

    commit('setOffScroll', true)
    setTimeout(() => {
      commit('setOffScroll', false)
    }, 1000)

    setTimeout(() => {
      commit('setSection', value)
    }, 50)
  },
}
