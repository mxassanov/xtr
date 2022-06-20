<template>
  <transition :name="scrollDirection === 'down' ? 'case-swiper-down' : 'case-swiper-up'">
    <div
      ref="mainContainer"
      v-show="isVisible"
      class="case-swiper w-full top-0 left-0"
      :class="order === 'default' ? 'bg-black relative' : 'absolute h-screen '"
    >
      <div class="z-9 fixed left-0 top-0 h-full xs:hidden case-swiper__shadow-left"></div>
      <div
        ref="scrollContainer"
        class="case-swiper overflow-y-scroll overflow-x-hidden w-full h-full text-white pt-32 px-24 md:px-16 sm:px-8 xs:px-6 xs:pt-10 flex flex-col"
      >
        <div
          class="grid grid-cols-3 xs:grid-cols-1 items-center case-swiper__top-text xs:flex-col xs:items-start xs:gap-2 relative"
        >
          <p class="text-3xl font-bold leading-10 text-white">All Cases</p>
          <p class="leading-5 case-swiper__subtext xs:ml-0 xs:w-full col-span-2">
            Need a hand with Back-end development? Fill out the form below to receive<br
              class="md:hidden sm:hidden xs:hidden"
            />
            a free consultation and find out how Andersen can help your business grow
          </p>
          <nuxt-link
            to="/cases"
            class="right-0 my-auto text-white absolute flex items-center gap-2 md:hidden sm:hidden"
          >
            <p class="text-white font-medium text-xl leading-6">All</p>
            <LazyImage width="32" height="32" src="index/case-swiper/arrow.svg" />
          </nuxt-link>
        </div>
        <client-only>
          <swiper
            :options="options"
            class="w-full mt-14 case-swiper__swiper overflow-visible relative"
            @slideChange="handleSlideChange"
          >
            <swiper-slide
              v-for="(caseItem, index) in cases"
              :key="caseItem.title"
              class="case-swiper__slide rounded-45 xs:rounded-15 overflow-hidden px-8 flex flex-col justify-end pb-12 xs:pb-8 xs:px-4"
            >
              <LazyImage
                :src="`index/cases/${index + 1}.png`"
                class="w-full h-full top-0 left-0 absolute object-cover case-swiper__image transition-all duration-500"
              />
              <p class="text-3xl leading-10 font-medium relative z-1">{{ caseItem.title }}</p>
              <p class="mt-2 font-medium leading-5 relative z-1">{{ caseItem.subtitle }}</p>
            </swiper-slide>
            <div class="z-9 absolute left-0 bottom-0 case-swiper__shadow-bottom"></div>
          </swiper>
        </client-only>
        <div class="mt-8 h-2 w-32 case-swiper__navigation bg-yellow-1 rounded-10 mx-auto p-0.5">
          <div
            :style="{
              transform: `translateX(${currentSlide * (106 / cases.length)}px)`,
            }"
            class="w-8 bg-black h-full rounded-10 duration-500"
          ></div>
        </div>
        <nuxt-link to="/cases" class="mx-auto mt-6 hidden sm:flex md:flex text-white items-center gap-2">
          <p class="text-white font-medium text-xl leading-6">All</p>
          <LazyImage width="32" height="32" src="index/case-swiper/arrow.svg" />
        </nuxt-link>
        <nuxt-link to="/cases">
          <UiButton class="hidden xs:flex xs:w-full w-44 mt-8 case-swiper__button mx-auto">View all</UiButton>
        </nuxt-link>
        <Footer v-if="isLast" class="case-swiper__footer" />
      </div>
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'
import Footer from '@/components/Footer'
import UiButton from '@/components/ui/UiButton.vue'

export default {
  name: 'CaseSwiper',
  components: { Footer, UiButton },
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
    isLast: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
      options: {
        spaceBetween: 8,
        slidesPerView: 1,
        breakpoints: {
          744: {
            spaceBetween: 16,
            slidesPerView: 1.5,
          },
          1024: {
            spaceBetween: 16,
            slidesPerView: 2.1,
          },
          1440: {
            spaceBetween: 16,
            slidesPerView: 2.3,
          },
          1920: {
            spaceBetween: 16,
            slidesPerView: 3.3,
          },
        },
      },
      cases: [
        {
          title: 'Alibaba.com',
          subtitle: 'CRM development',
        },
        {
          title: 'Blockchain.com',
          subtitle: 'Application for mobile',
        },
        {
          title: 'Deutsche Bank',
          subtitle: 'System optimization',
        },
        {
          title: 'Talanty.online',
          subtitle: 'HR Portal',
        },
        {
          title: 'PepsiCo',
          subtitle: 'Developing a meta-universe',
        },
        {
          title: 'Auchan',
          subtitle: 'Targeted marketing models',
        },
        {
          title: 'Nestlé',
          subtitle: 'Mobile app for testing',
        },
      ],
    }
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
  methods: {
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex
    },
  },
  watch: {
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', 'black')
    },
  },
}
</script>

<style lang="scss" scoped>
.case-swiper {
  &__slide {
    min-height: 422px;
  }
  &__subtext {
    @media (min-width: 768px) {
      max-width: 450px;
    }
    @media (min-width: 1075px) {
      max-width: 620px;
    }
  }
  &__swiper {
    min-height: 422px;
  }
  &__shadow-bottom {
    width: 5000px;
    box-shadow: 0px 0px 25px 25px black;
  }
  &__shadow-left {
    box-shadow: 0px 0px 25px 25px black;
  }
  &__image:hover {
    transform: scale(1.2);
  }
}

.case-swiper-down {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
    .case-swiper__shadow-left {
      transition: opacity 500ms;
    }
  }
  &-enter {
    .case-swiper__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .case-swiper__swiper,
    .case-swiper__footer,
    .case-swiper__navigation {
      transform: translateY(100vh);
    }
    .case-swiper__shadow-left {
      opacity: 0;
    }
  }
  &-leave-to {
    .case-swiper__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .case-swiper__swiper,
    .case-swiper__footer,
    .case-swiper__navigation {
      transform: translateY(-100vh);
    }
    .case-swiper__shadow-left {
      opacity: 0;
    }
  }
}

.case-swiper-up {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
    .case-swiper__shadow-left {
      transition: opacity 500ms;
    }
  }
  &-enter {
    .case-swiper__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .case-swiper__swiper,
    .case-swiper__footer,
    .case-swiper__navigation {
      transform: translateY(-100vh);
    }
    .case-swiper__shadow-left {
      opacity: 0;
    }
  }
  &-leave-to {
    .case-swiper__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .case-swiper__swiper,
    .case-swiper__footer,
    .case-swiper__navigation {
      transform: translateY(100vh);
    }
    .case-swiper__shadow-left {
      opacity: 0;
    }
  }
}
</style>
