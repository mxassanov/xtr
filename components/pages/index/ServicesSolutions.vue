<template>
  <transition :name="scrollDirection === 'down' ? 'solutions-down' : 'solutions-up'">
    <div ref="mainContainer" v-show="isVisible" class="w-full h-screen absolute top-0 left-0 text-white">
      <div
        ref="scrollContainer"
        class="
          h-full
          w-full
          md:overflow-scroll
          sm:overflow-scroll
          pt-32
          px-24
          md:px-16
          sm:px-8
          md:pb-12
          sm:pb-12
          flex flex-col
          gap-6
        "
      >
        <div class="w-full grid grid-cols-3 items-center solutions__top-text">
          <p class="text-3xl leading-10 font-bold">Services</p>
          <p class="solutions__subtitle font-medium leading-5">
            Proven experience in using advanced development<br />
            technologies and artificial intelligence models
          </p>
        </div>
        <div class="w-full flex-1 flex md:flex-col sm:flex-col solutions__scroll-container">
          <div
            v-for="(solution, index) in solutions"
            :key="solution.title"
            class="
              flex-1
              relative
              overflow-hidden
              flex flex-col
              justify-between
              px-4
              pt-8
              pb-16
              lg:pb-10
              md:flex-row md:p-8 md:items-end
              sm:flex-row sm:p-4 sm:items-end
              solutions__image
            "
            :class="`solutions__image_${index + 1}`"
          >
            <div
              style="transform: scaleY(0)"
              class="solutions__cover w-full h-full absolute top-0 left-0 z-9 bg-black origin-top"
              :class="`solutions__cover_${index + 1}`"
            ></div>
            <LazyImage
              :src="`index/solutions/${index + 1}.png`"
              class="w-full h-full object-cover absolute top-0 left-0 solutions__image duration-300 transition-all"
            />
            <p class="solutions__number font-medium relative z-1 sm:order-1 md:order-1">
              {{ '0' + (index + 1) }}
            </p>
            <div class="relative z-1">
              <div class="flex gap-4 items-end sm:flex-col sm:gap-5 mb-4 sm:mb-2 sm:items-start">
                <p class="solutions__title font-medium sm:order-1" v-html="solution.title"></p>
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    bg-white
                    rounded-full
                    w-8
                    h-8
                    mb-2
                    solutions__arrow-wrapper
                    duration-300
                  "
                >
                  <LazyImage width="14" height="14" src="index/solutions/solution-arrow.svg" />
                </div>
              </div>
              <p v-for="item in solution.list" :key="item" class="text-xl leading-6 sm:text-base sm:leading-5 mt-1">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'ServicesSolutions',
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      solutions: [
        {
          title: 'Strategy<br/> and design',
          list: [
            'Strategy',
            'Corporate identity design',
            'Creative Web Design',
            'Graphic Design & CGI',
            'Content Development',
            'Creative Interface',
          ],
        },
        {
          title: 'IT product<br/> development',
          list: [
            'Product Strategy',
            'UX and UI design',
            'Frontend development',
            'Backend development',
            'Quality assurance',
            'Help Desk',
          ],
        },
        {
          title: 'Performance<br/> marketing',
          list: ['Analytics', 'Display advertising', 'Targeted advertising', 'Media advertising', 'SEO'],
        },
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
}
</script>

<style lang="scss">
.solutions {
  &__subtitle {
    width: 453px;
    // margin-left: 448px;
    // @media (max-width: 1919px) {
    //   margin-left: 288px;
    // }
    // @media (max-width: 1199px) {
    //   margin-left: 169px;
    // }
    // @media (max-width: 1023px) {
    //   margin-left: 96px;
    // }
  }

  &__image {
    @media (max-width: 1199px) {
      object-position: center 10% !important;
    }
  }
  &__number {
    font-size: 50px;
    line-height: 60px;
  }
  &__title {
    font-size: 50px;
    line-height: 60px;
  }
  &__image:hover img.duration-300 {
    transform: scale(1.2);
  }
  &__image:hover .solutions__arrow-wrapper {
    background: #fff500 !important;
  }
}

.solutions-up {
}

.solutions-down {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;

    .solutions__top-text {
      transition: all 1000ms !important;
    }
    .solutions__scroll-container {
      transition: all 1000ms !important;
    }

    .solutions__cover_1 {
      transition: all 900ms !important;
      transition-delay: 0ms !important;
    }
    .solutions__cover_2 {
      transition: all 900ms !important;
      transition-delay: 100ms !important;
    }
    .solutions__cover_3 {
      transition: all 800ms !important;
      transition-delay: 200ms !important;
    }
  }

  &-enter {
    .solutions__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .solutions__scroll-container {
      transform: translateY(100vh) !important;
    }
    .solutions__cover {
      transform: scaleY(100%) !important;
    }
  }
  &-leave-to {
    .solutions__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }

    .solutions__scroll-container {
      transform: translateY(-100vh);
    }
  }
}

.solutions-up {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;

    .solutions__top-text {
      transition: all 1000ms !important;
    }
    .solutions__scroll-container {
      transition: all 1000ms !important;
    }

    .solutions__cover_1 {
      transition: all 900ms !important;
      transition-delay: 0ms !important;
    }
    .solutions__cover_2 {
      transition: all 900ms !important;
      transition-delay: 100ms !important;
    }
    .solutions__cover_3 {
      transition: all 800ms !important;
      transition-delay: 200ms !important;
    }
  }

  &-enter {
    .solutions__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .solutions__scroll-container {
      transform: translateY(100vh) !important;
    }
    .solutions__cover {
      transform: scaleY(100%) !important;
    }
  }
  &-leave-to {
    .solutions__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }

    .solutions__scroll-container {
      transform: translateY(100vh);
    }
  }
}
</style>