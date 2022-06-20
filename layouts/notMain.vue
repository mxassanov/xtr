<template>
  <div class="relative">
    <Navbar />
    <Nuxt />
    <transition name="menu-appear"><MenuModal v-show="isMenuVisible" /></transition>
  </div>
</template>

<script>
import MenuModal from '~/components/MenuModalNotMain.vue'
import Navbar from '~/components/NavbarNotMain.vue'

export default {
  name: 'NotMain',
  components: { MenuModal, Navbar },
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