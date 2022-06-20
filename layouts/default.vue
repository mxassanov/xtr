<template>
  <div>
    <Navbar />
    <Nuxt />
    <transition name="menu-appear"><MenuModal v-show="isMenuVisible" /></transition>
  </div>
</template>

<script>
import Navbar from '~/components/NavbarMain.vue'
import MenuModal from '~/components/MenuModalMain.vue'

export default {
  name: 'Default',
  components: { Navbar, MenuModal },
  computed: {
    isMenuVisible() {
      return this.$store.state.isMenuVisible
    },
  },
}
</script>

<style lang="scss">
.menu-appear {
  &-leave-active,
  &-enter-active {
    transition: all 1500ms;
    .menu-modal__item-wrapper,
    .menu-modal__contact-wrapper {
      transition: all 1000ms;
      transition-delay: 500ms;
    }
  }
  &-enter,
  &-leave-to {
    max-height: 0% !important;
    .menu-modal__item-wrapper,
    .menu-modal__contact-wrapper {
      opacity: 0;
      transform: translateY(50px);
    }
  }
  &-enter-to,
  &-leave {
    max-height: 100% !important;
  }
}
</style>