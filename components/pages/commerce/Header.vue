<template>
  <transition :name="scrollDirection === 'down' ? 'header-down' : 'header-up'">
    <div
      ref="mainContainer"
      v-show="isVisible"
      class="w-full top-0 left-0 text-white"
      :class="order === 'default' ? 'bg-black pb-20' : 'absolute h-screen '"
    >
      <div ref="scrollContainer" class="w-full h-full text-white overflow-y-scroll pb-12">
        <div class="header__bg relative">
          <LazyImage src="commerce/header/header-bg.png" class="w-full h-full object-cover absolute top-0 left-0" />
          <h1 class="header__title relative z-1 px-24 md:px-16 sm:px-8 xs:px-6">E-commerce</h1>
        </div>
        <div class="px-24 md:px-16 sm:px-8 xs:px-6 mt-16 xs:mt-6">
          <div class="flex items-center">
            <LazyImage width="48" height="48" src="commerce/header/qoutes.svg" class="relative z-2" />
            <LazyImage width="48" height="48" src="commerce/header/founder.png" class="relative -left-3" />
            <div>
              <p class="font-bold text-sm leading-4 text-white">Michael Polejaev</p>
              <p class="text-sm leading-4 text-gray-11 mt-0.5">co-founder</p>
            </div>
          </div>
          <p class="mt-6 xs:mt-2.5 text-2xl leading-10 font-medium xs:text-base xs:leading-5 text-gray-2">
            Besides current industry standards XTR approaches SEO optimisation and organic traffic development with own
            unique methodology and tools which catapults traffic indicators of our clients to the top of their segment
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'Header',
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
    isFirst: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isVisible() {
      return this.currentSection === this.$props.order || this.$props.order === 'default'
    },
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    scrollDirection() {
      return this.$store.state.indexScrollDirection
    },
  },
  watch: {
    isVisible() {
      this.$store.commit('changeBgColor', 'black')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__bg {
    height: 542px;
    @media (max-width: 1919px) {
      height: 500px;
    }
    padding-top: 187px;
    @media (max-width: 743px) {
      height: 474px;
      padding-top: 381px;
    }
  }
  &__title {
    font-size: 100px;
    line-height: 121px;
    @media (max-width: 1023px) {
      font-size: 90px;
      line-height: 109px;
    }
    @media (max-width: 743px) {
      font-size: 50px;
      line-height: 60px;
    }
  }
}

.header-down {
  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateY(100vh);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
.header-up {
  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateY(-100vh);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
</style>