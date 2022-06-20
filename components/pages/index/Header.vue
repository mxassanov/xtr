<template>
  <transition name="header">
    <div v-show="isVisible" class="w-full h-screen absolute top-0 left-0 header">
      <LazyImage
        width="1427"
        height="1080"
        alt="background"
        src="index/header/header-bg.png"
        class="header__bg-image absolute top-0 xl:right-0"
      />
      <div ref="mainContainer" class="w-full h-full relative flex items-center pl-24 pr-40 lg:px-24 md:px-16 sm:px-8">
        <div
          class="w-full flex md:flex-col sm:flex-col gap-12 md:gap-20 sm:gap-8 items-end md:items-start sm:items-start"
        >
          <div class="flex-1 relative">
            <p class="text-yellow-1 leading-5 font-medium">/ Design & custom software development</p>
            <h1 class="header__title mt-2 text-white font-medium tracking-tight">
              DAO Culture.<br />
              Startup Speed.<br />
              Magic Rates.
            </h1>
            <LazyImage
              width="120"
              height="120"
              src="index/header/arrow-down.svg"
              class="header__arrow absolute lg:left-32 xl:left-32"
            />
          </div>
          <div class="header__info-block">
            <p class="text-white text-2xl lg:text-xl leading-7 lg:leading-6 font-medium tracking-none">
              We <span class="font-bold text-yellow-1">x-multiply</span> and
              <span class="font-bold text-yellow-1">x-scale</span> businesses via high-tech ideas and custom
              it-solutions at → startup speed.
            </p>
            <div class="flex gap-2 flex-wrap mt-6 lg:mt-4 sm:mt-8 header__tag-block">
              <div
                v-for="tag in tags"
                :key="tag"
                class="header__tag py-1.5 px-3 font-bold text-sm leading-4 tracking-none rounded-100"
              >
                {{ tag }}
              </div>
            </div>
            <button
              class="
                hidden
                md:flex
                sm:flex
                mt-20
                sm:mt-16
                bg-white
                text-xl
                leading-6
                font-medium
                justify-center
                items-center
                rounded-100
                h-14
                w-60
              "
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'Header',
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
  mixins: [changeCurrentSection],
  data() {
    return {
      tags: [
        'App & Web',
        'CRM, ERP, MDM, BPMS',
        'AR/VR',
        'Machine Learning',
        'BPMS',
        'RPA',
        'NFT',
        'DeFi',
        'Blockchain',
        'Metaverse',
        'Biometrics',
      ],
    }
  },
  computed: {
    isVisible() {
      return this.currentSection === this.$props.order
    },
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    scrollDirection() {
      return this.$store.state.indexScrollDirection
    },
  },
  watch: {
    currentSection(newValue) {
      if (newValue === 1) this.$store.commit('changeBgColor', 'black')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  &__bg-image {
    max-width: unset !important;
    @media (max-width: 1919px) {
      right: -400px;
    }
    @media (max-width: 1199px) {
      width: 1765px !important;
      height: 1336px !important;
      right: unset;
      left: -152px;
    }
  }
  &__title {
    font-size: 150px;
    line-height: 150px;
    @media (max-width: 1919px) {
      font-size: 100px;
      line-height: 100px;
    }
    @media (max-width: 1199px) {
      font-size: 120px;
      line-height: 120px;
    }
    @media (max-width: 1023px) {
      font-size: 90px;
      line-height: 90px;
    }
    @media (max-height: 744px) {
      font-size: 70px;
      line-height: 70px;
    }
  }
  &__info-block {
    width: 503px;
    @media (max-width: 1919px) {
      width: 411px;
    }
    @media (max-width: 1199px) {
      width: 630px;
    }
  }
  &__tag {
    background: rgba(220, 220, 220, 0.7);
    &-block {
      @media (max-width: 1199px) {
        width: 400px;
      }
    }
  }
  &__arrow {
    bottom: -190px;
    @media (max-width: 1919px) {
      height: 100px;
      bottom: -150px;
    }
    @media (max-width: 1199px) {
      right: 0;
      bottom: -300px;
    }
  }

  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-enter,
  &-leave-to {
    transform: translateY(-100vh);
  }
}
</style>