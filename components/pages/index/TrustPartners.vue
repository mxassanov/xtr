<template>
  <transition :name="scrollDirection === 'down' ? 'partners-down' : 'partners-up'">
    <div v-show="isVisible" ref="mainContainer" class="w-full h-screen absolute top-0 left-0">
      <div class="w-full h-full flex flex-col justify-between pt-32 px-24 pb-20 md:px-16 sm:px-8">
        <div class="grid grid-cols-3 sm:flex sm:justify-between w-full partners__top-text">
          <p class="text-3xl text-white flex-1 font-bold leading-10">We are trusted</p>
          <div class="flex items-center sm:ml-4">
            <p class="text-white leading-5">
              We successfully work with the largest corporations and startups from around the world
            </p>
          </div>
        </div>
        <div
          :style="{ 'animation-play-state': `${isAnimationRunning ? 'running' : 'paused'}` }"
          class="flex partners__items-wrapper relative"
          style="width: calc(160px * 8)"
          :class="{
            'partners__items-wrapper_animation': isAnimationActive,
          }"
          @transitionend="isAnimationActive = true"
        >
          <div
            v-for="(partner, index) in partners"
            :key="index"
            :style="{ transform: `translateX(${-24 * index}px)` }"
            class="partners__item block rounded-full border border-gray-2 hover:border-yellow-1 flex flex-col justify-around items-center"
            @mouseenter="isAnimationRunning = false"
            @mouseleave="isAnimationRunning = true"
          >
            <div class="flex flex-col items-center">
              <div class="relative">
                <LazyImage :width="partner.width" :height="partner.height" :src="`index/partners/${index + 1}.svg`" />
                <LazyImage
                  :width="partner.width"
                  :height="partner.height"
                  :src="`index/partners/colored-${index + 1}.svg`"
                  class="absolute top-0 left-0 partners__colored-image"
                />
              </div>
              <p class="partners__item-text mt-6 text-gray-2 text-center font-medium">
                {{ partner.text }}
              </p>
            </div>
            <LazyImage width="46" height="40" alt="qoutes" src="index/partners/qoutes.svg" />
          </div>
        </div>
        <client-only>
          <vue-custom-scrollbar
            :settings="settings"
            class="h-2 w-32 bg-yellow-1 p-0.5 rounded-10 mx-auto partners__navigation"
            style="width: 128px; heigth: 8px"
          >
            <div
              :style="{ 'animation-play-state': `${isAnimationRunning ? 'running' : 'paused'}` }"
              class="h-full w-8 bg-black rounded-10 origin-left relative"
              :class="{ 'partners__navigation-tab_animated': isAnimationActive }"
            />
          </vue-custom-scrollbar>
        </client-only>
      </div>
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'TrustPartners',
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      settings: {
        suppressScrollY: true,
        suppressScrollX: false,
        wheelPropagation: false,
      },
      swiperOptions: {
        breakpoints: {
          744: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 5,
          },
        },
      },
      isAnimationActive: false,
      isSecondAnimationActive: false,
      isAnimationRunning: true,
      partners: [
        {
          width: '120',
          height: '120',
          text: "The competencies of the developers exceeded our expectations of senior. With adaptive and agile processes, XTR was quickly built into release cycles and we didn't notice the period of adaptation and transition",
        },
        {
          width: '120',
          height: '120',
          text: 'The XTR team was super creative and involved in the meta-universe project. The following was developed and tested on users: a bible of heroes, mobile and AR interaction scenarios',
        },
        {
          width: '206',
          height: '107',
          text: 'XTR launched the MVP 3 weeks before the contract was signed. This is a manifestation of trust and high responsibility of the developer company. We expanded the cooperation and increased the team 3 times after the initial launch of the project',
        },
        {
          width: '120',
          height: '120',
          text: 'We saw the highest quality. In 100% of cases, the delivered functionality met the requirements and was tested by users in a live environment. This was important to speed up time to market and improve customer service for the company',
        },
        {
          width: '120',
          height: '120',
          text: "XTR's business consulting and expertise are at the level of world leaders. After the launch of the mobile app, we continued our cooperation in the development of the company's business development strategy for 2022-2025.",
        },
        {
          width: '120',
          height: '120',
          text: 'XTR was part of a successful startup with a $5M seed valuation. From day one until today 100% of the IT team is XTR employees. Flexible processes allow not to distinguish the difference between outsourcing and in-house development team',
        },
        {
          width: '148',
          height: '81',
          text: '100% reliability and adherence to release cycle timelines. XTR is attentive to technical documentation and development descriptions. This greatly facilitated the processes of transferring when and developing the created it solutions',
        },
        {
          width: '78',
          height: '120',
          text: 'High creative abilities of the team and understanding of business tasks allowed us to save time and get both IT implementation and creativity in 1 project. The platform project for students was considered a success based on business metrics. Project plans were exceeded by 120%',
        },
      ],
    }
  },
  methods: {
    addSecondAnimation() {
      this.isAnimationActive = false
      this.isSecondAnimationActive = true
    },
  },
  watch: {
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', 'black')
    },
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
}
</script>

<style lang="scss">
.partners {
  &__top-text {
    width: 450px;
  }
  &__items-wrapper_animation {
    animation: 40s linear infinite moving;
  }
  &__items-wrapper_second-animation {
    animation: 20s linear infinite second-moving;
  }
  &__colored-image {
    opacity: 0;
    transition: all 0ms !important;
  }
  &__navigation-tab_animated {
    animation-name: tab-moving;
    animation-duration: 50s;
    animation-timing-function: linear;
  }
  &__subtitle {
    margin-left: 341px;
    @media (max-width: 1919px) {
      margin-left: 181px;
    }
    @media (max-width: 1199px) {
      margin-left: 62px;
    }
    @media (max-width: 1023px) {
      margin-left: 16px;
    }
  }
  &__item {
    min-width: 450px;
    width: 450px;
    height: 450px;
    &:hover .partners__colored-image {
      opacity: 1;
    }
  }
  &__item-text {
    width: 80%;
  }
}

.partners-down {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
  }

  &-enter {
    .partners__navigation {
      transform: translateY(100vh);
    }

    .partners__items-wrapper {
      transform: translateY(100vh) translateX(1000px);
    }

    .partners__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
  }

  &-leave-to {
    .partners__navigation {
      transform: translateY(-100vh);
    }

    .partners__items-wrapper {
      transform: translateY(-100vh) translateX(-1000px);
    }

    .partners__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
  }
}

.partners-up {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
  }

  &-enter {
    .partners__navigation {
      transform: translateY(-100vh);
    }

    .partners__items-wrapper {
      transform: translateY(-100vh) translateX(-1000px);
    }

    .partners__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
  }

  &-leave-to {
    .partners__navigation {
      transform: translateY(100vh);
    }

    .partners__items-wrapper {
      transform: translateY(100vh) translateX(1000px);
    }

    .partners__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
  }
}

@keyframes moving {
  from {
    left: 0;
  }
  to {
    left: -300%;
  }
}
@keyframes tab-moving {
  from {
    left: 0;
  }
  to {
    left: 90px;
  }
}
@keyframes second-moving {
  from {
    left: 0;
  }
  to {
    left: -300%;
  }
}
</style>
