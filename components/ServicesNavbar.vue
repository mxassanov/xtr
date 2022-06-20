<template>
  <div
    ref="navbarWrapper"
    class="px-24 md:px-16 sm:px-8 xs:px-6 fixed z-20 w-full xs:flex xs:items-center duration-1000 index navbar"
    :class="[currentSection === 1 ? 'navbar_first-section ' : 'navbar_not-first-section']"
  >
    <div
      class="flex justify-between items-start xs:items-center w-full duration-1000"
      :class="currentSection === 1 ? 'mt-16 xs:mt-0' : 'mt-10 xs:mt-0'"
    >
      <div class="flex items-start xs:h-2.5">
        <nuxt-link to="/" @click.native="handleLogoClick">
          <LazyImage width="56" height="32" src="navbar/logo.svg" />
        </nuxt-link>
        <div
          class="navbar__first-block md:hidden sm:hidden xs:hidden duration-1000"
          :class="{ 'navbar__hidden-element': isNavbarHidden }"
        >
          <nuxt-link to="/cases" class="text-white block font-semibold leading-5 mb-1.5 hover:text-yellow-1"
            >Cases</nuxt-link
          >
          <nuxt-link
            to="/services-solutions"
            class="text-yellow-1 block font-semibold leading-5 mb-1.5 hover:text-yellow-1"
          >
            Services & Solutions
          </nuxt-link>
          <nuxt-link to="/commerce" class="text-white block font-semibold leading-5 mb-1.5 hover:text-yellow-1">
            E-commerce
          </nuxt-link>
          <p
            class="text-white font-semibold leading-5 mb-1.5 hover:text-yellow-1"
            @click="$router.push('/', () => $store.dispatch('setSection', 8))"
          >
            Super Deals
          </p>
        </div>
        <div
          class="navbar__second-block md:hidden sm:hidden xs:hidden duration-1000"
          :class="{ 'navbar__hidden-element': isNavbarHidden }"
        >
          <p
            class="text-white font-semibold leading-5 mb-1.5 hover:text-yellow-1"
            @click="$router.push('/', () => $store.dispatch('setSection', 6))"
          >
            Technologies
          </p>
          <p
            class="text-white font-semibold leading-5 mb-1.5 hover:text-yellow-1"
            @click="$router.push('/', () => $store.dispatch('setSection', 7))"
          >
            Processes
          </p>
          <p
            class="text-white font-semibold leading-5 mb-1.5 hover:text-yellow-1"
            @click="$router.push('/', () => $store.dispatch('setSection', 9))"
          >
            Reviews
          </p>
        </div>
      </div>
      <div class="flex items-start">
        <div
          class="navbar__lang-switcher flex gap-4 md:hidden sm:hidden xs:hidden duration-1000"
          :class="{ 'navbar__hidden-element': isNavbarHidden }"
        >
          <p class="text-yellow-1 leading-5 font-semibold">En</p>
          <p class="text-white leading-5 font-semibold">Es</p>
        </div>
        <div class="relative">
          <div
            class="h-4 xs:h-2.5 flex flex-col justify-between w-9 xs:w-5 absolute top-0 right-0 duration-1000"
            :class="[isScrolled ? 'opacity-1' : 'opacity-0']"
            @click="toggleMenuModal"
          >
            <div
              style="height: 3px"
              class="w-full bg-white xs:h-0.5 navbar__top-burger"
              :class="{ 'navbar__top-burger_active': $store.state.isMenuVisible }"
            ></div>
            <div
              style="height: 3px"
              class="w-full bg-white xs:h-0.5 navbar__bottom-burger"
              :class="{ 'navbar__bottom-burger_active': $store.state.isMenuVisible }"
            ></div>
          </div>
          <UiButton
            class="w-44 md:hidden sm:hidden xs:hidden"
            :class="{ 'navbar__hidden-element': isNavbarHidden }"
            @click.native="toggleMenuModal"
          >
            Contact
          </UiButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '@/components/ui/UiButton.vue'

export default {
  name: 'Navbar',
  components: { UiButton },
  data() {
    return {
      isNavbarSolid: false,
      isScrolled: false,
    }
  },
  computed: {
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    isNavbarHidden() {
      return this.isScrolled || this.$store.state.isMenuVisible
    },
  },
  methods: {
    handleLogoClick() {
      // if (this.$store.state.isMenuVisible) return
      // this.$store.dispatch('setSection', 1)
       if (!this.$store.state.isMenuVisible) this.$store.commit('setSection', 1)
      else this.$store.commit('toggleMenu')
    },
    toggleMenuModal() {
      this.$store.commit('toggleMenu')
    },
    scrollHandler() {
      if (document.querySelector('.servsol').getBoundingClientRect().y < 0) this.isScrolled = true
      else this.isScrolled = false
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
}
</script>

<style lang="scss">
.navbar {
  &_first-section {
    height: 160px;
    @media (max-width: 743px) {
      height: 90px;
    }
  }
  &_not-first-section {
    height: 117px;
    @media (max-width: 743px) {
      height: 90px;
    }
  }

  &__first-block {
    margin-left: 235px;
    @media (max-width: 1919px) {
      margin-left: 155px;
    }
  }
  &__second-block {
    margin-left: 132px;
  }
  &__lang-switcher {
    margin-right: 330px;
    @media (max-width: 1919px) {
      margin-right: 170px;
    }
    @media (max-width: 1199px) {
      margin-right: 0;
    }
  }

  &__hidden-element {
    transform: translateY(-300px);
  }

  &__bottom-burger {
    transform-origin: 16%;
    transition: all 500ms;
    &_active {
      transform: rotate(-45deg);
    }
    @media (max-width: 743px) {
      transform-origin: 20%;
    }
  }
  &__top-burger {
    transform-origin: 32%;
    transition: all 500ms;
    &_active {
      transform: rotate(45deg);
    }
    @media (max-width: 743px) {
      transform-origin: 20%;
    }
  }
}
</style>
