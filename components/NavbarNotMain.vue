<template>
  <div
    ref="navbarWrapper"
    class="px-24 md:px-16 sm:px-8 xs:px-6 fixed z-20 lg:-top-10 xl:-top-10 sm:-top-10 md:-top-10 w-full xs:flex xs:items-center duration-1000 navbar-not-main"
    :class="[
      currentSection === 1 ? 'navbar_first-section ' : 'navbar_not-first-section',
      !isMenuVisible && $route.path.includes('cases') ? 'bg-light-gray' : '',
    ]"
  >
    <div
      class="flex justify-between items-start xs:items-center w-full duration-1000"
      :class="currentSection === 1 ? 'mt-16 xs:mt-0' : 'mt-16 xs:mt-0'"
    >
      <div class="flex items-start xs:h-2.5">
        <nuxt-link to="/" @click.native="handleLogoClick">
          <LazyImage
            :key="$store.state.isMenuVisible"
            width="56"
            height="32"
            :src="`navbar/logo${$store.state.isMenuVisible || isNavbarWhite ? '' : '-dark'}.svg`"
            class=""
          />
        </nuxt-link>
      </div>
      <div class="flex items-center">
        <div class="relative">
          <div
            class="h-4 xs:h-2.5 flex flex-col justify-between w-9 xs:w-5 absolute top-0 right-0 duration-1000"
            @click="toggleMenuModal"
          >
            <div
              style="height: 3px"
              class="w-full bg-black xs:h-0.5 navbar__top-burger"
              :class="[
                $store.state.isMenuVisible ? 'navbar__top-burger_active' : '',
                $store.state.isMenuVisible || isNavbarWhite ? 'bg-white' : 'bg-black',
              ]"
            ></div>
            <div
              style="height: 3px"
              class="w-full bg-black xs:h-0.5 navbar__bottom-burger"
              :class="[
                $store.state.isMenuVisible ? 'navbar__bottom-burger_active' : '',
                $store.state.isMenuVisible || isNavbarWhite ? 'bg-white' : 'bg-black',
              ]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isNavbarSolid: false,
    }
  },
  computed: {
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    isBgSolid() {
      return this.$store.state.isNavbarSolid
    },
    isNavbarHidden() {
      return this.currentSection !== 1 || this.$store.state.isMenuVisible
    },
    isNavbarWhite() {
      return !this.$route.path.includes('cases')
    },
    isMenuVisible() {
      return this.$store.state.isMenuVisible
    },
  },
  methods: {
    handleLogoClick() {
      if (!this.$store.state.isMenuVisible) this.$store.commit('setSection', 1)
      else this.$store.commit('toggleMenu')
    },
    toggleMenuModal() {
      this.$store.commit('toggleMenu')
    },
  },
}
</script>

<style lang="scss">
.navbar {
  &_first-section {
    height: 110px;
    @media (max-width: 743px) {
      height: 90px;
    }
  }
  &_not-first-section {
    height: 110px;
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
