<template>
  <transition
    :name="scrollDirection === 'down' ? 'reviews-down' : 'reviews-up'"
    @after-enter="handleAfterEnter"
    @before-leave="handleAfterLeave"
  >
    <div
      ref="mainContainer"
      v-show="isVisible"
      class="advantages w-full top-0 left-0"
      :class="order === 'default' ? 'bg-case-1 pb-20' : 'absolute h-screen '"
    >
      <div
        ref="scrollContainer"
        class="reviews w-full h-full text-white pt-32 px-24 md:px-16 sm:px-8 sm:pb-16 flex flex-col"
        :class="{ 'overflow-y-scroll': isEntered }"
      >
        <div class="grid grid-cols-3 items-center reviews__top-text">
          <p class="text-3xl text-black font-bold leading-10">Reviews</p>
          <div class="flex items-center col-span-2">
            <p class="text-black leading-5 reviews__subtext">
              SMB, enterprise, and startup clients return to us because they’re happy with our work. Here’s what they
              say about XTR
            </p>
          </div>
        </div>
        <div class="mt-10 md:mt-12 sm:mt-12 flex gap-4 items-center reviews__pagination">
          <p class="text-black text-xl leading-6">{{ currentSlide }}</p>
          <div style="width: 260px" class="relative h-px bg-white">
            <div
              :style="{ transform: `scaleX(${currentSlide / reviews.length})` }"
              class="origin-left absolute top-0 left-0 h-full w-full bg-black duration-1000"
            ></div>
          </div>
          <p class="text-white text-xl leading-6">{{ reviews.length }}</p>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-white" @click="prevSlide">
            <LazyImage width="14" height="14" src="index/reviews/arrow-left.svg" />
          </div>
          <div class="flex justify-center items-center w-8 h-8 rounded-full bg-white" @click="nextSlide">
            <LazyImage width="14" height="14" src="index/reviews/arrow-right.svg" />
          </div>
        </div>
        <div class="mt-8 md:mt-12 sm:mt-12 w-full reviews__slider">
          <client-only>
            <swiper
              ref="reviewSwiper"
              :options="options"
              class="w-full"
              @slideChange="handleSlideChange"
              @ready="initSwiper"
            >
              <swiper-slide v-for="review in reviews" :key="review.key">
                <div class="flex gap-8 md:gap-12 sm:gap-12 sm:flex-col md:flex-col">
                  <div class="flex-1 relative">
                    <div class="flex items-center gap-6">
                      <div
                        class="reviews__avatar-wrapper rounded-full overflow-hidden flex justify-center items-center"
                      >
                        <LazyImage :src="`index/reviews/${review.key}-employee.png`" />
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-5 text-xl leading-6 font-medium">{{ review.name }}</p>
                        <p class="mt-1 text-gray-5 font-medium">{{ review.employee }}</p>
                        <p class="mt-3 font-semibold text-2xl leading-8 text-black">
                          {{ review.text }}
                        </p>
                      </div>
                    </div>
                    <p class="mt-8 text-gray-6 text-xl leading-6">
                      {{ review.subtext }}
                    </p>
                    <!-- <div class="mt-2.5 flex gap-2 items-center md:hidden sm:hidden">
                      <p class="text-black text-xl font-medium leading-6">Read more</p>
                      <div class="w-8 h-8 flex justify-center items-center bg-black rounded-full">
                        <LazyImage width="14" height="14" src="index/reviews/arrow-down.svg" />
                      </div>
                    </div> -->
                    <LazyImage
                      :width="review.width"
                      :src="`index/reviews/${review.key}.png`"
                      class="md:static sm:static mt-16 left-0 bottom-0"
                    />
                  </div>
                  <div
                    class="
                      reviews__client-card
                      px-6
                      pt-6
                      pb-12
                      rounded-20
                      bg-gray-2
                      md:flex md:w-full md:pb-10 md:gap-32
                      sm:flex sm:p-0 sm:bg-transparent sm:gap-6 sm:w-full
                    "
                  >
                    <div>
                      <div class="flex items-center gap-2">
                        <LazyImage width="32" height="32" :src="`index/reviews/${review.country}.png`" />
                        <p class="text-white text-xl leading-6 font-medium">{{ review.country }}</p>
                      </div>
                      <p class="mt-10 text-white uppercase text-xs leading-4 font-bold">Project Summary</p>
                      <p class="mt-2 text-white leading-5 font-medium">{{ review.summary }}</p>
                      <div class="mt-8 hidden md:block sm:block">
                        <p class="text-white text-xs font-bold leading-4 uppercase">Technologies</p>
                        <div class="mt-4 flex gap-2 flex-wrap w-full">
                          <div
                            v-for="tag in review.tags"
                            :key="tag"
                            class="rounded-60 reviews__tag text-sm text-black font-bold leading-4 py-1.5 px-3"
                          >
                            {{ tag }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-white reviews__grid mt-8 rounded-10 w-full grid grid-cols-2 grid-rows-2">
                      <div
                        v-for="block in review.blocks"
                        :key="block.title"
                        class="flex flex-col justify-center items-center py-5"
                      >
                        <p class="text-xs leading-4 font-semibold text-gray-2 uppercase">
                          {{ block.title }}
                        </p>
                        <p class="mt-1 leading-5 text-black">{{ block.text }}</p>
                      </div>
                    </div>
                    <div class="mt-10 md:hidden sm:hidden">
                      <p class="text-white text-xs font-bold leading-4 uppercase">Technologies</p>
                      <div class="mt-4 flex gap-2 flex-wrap w-full">
                        <div
                          v-for="tag in review.tags"
                          :key="tag"
                          class="rounded-60 reviews__tag text-sm text-black font-bold leading-4 py-1.5 px-3"
                        >
                          {{ tag }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'

export default {
  name: 'ReviewsList',
  mixins: [changeCurrentSection],
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
  },
  data() {
    return {
      isEntered: false,
      touchStartX: 0,
      touchEndX: 0,
      touchStartY: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
      options: {
        slidesPerView: 1,
        spaceBetween: 150,
      },
      slides: [
        {
          techs: ['App & Web', 'CRM, ERP, MDM, BPMS', 'Machine Learning', 'Biometrics'],
        },
      ],
      currentSlide: 1,
      swiper: {},
      reviews: [
        {
          name: 'Peter Smith',
          employee: 'CEO and Co-Founder at Blockchain.com',
          text: '“The XTR team got involved in the process and contributed a lot to the business logic of the processes. We quickly became part of the team”',
          subtext:
            '“The key advantages of XTR are: super competencies in UI / UX, proactivity in interaction and communications, high quality of the product being developed (for 12 months there was not a single release with errors). Part of the pokanda connected permanently to blockchain.com”',
          key: 'blockchain',
          country: 'UK',
          width: '326',
          summary: 'Development of a mobile application',
          blocks: [
            {
              title: 'industry',
              text: 'DeFi',
            },
            {
              title: 'team size',
              text: '8 specialists',
            },
            {
              title: 'duration',
              text: '18 months',
            },
            {
              title: 'budget',
              text: '10 FTE',
            },
          ],
          tags: ['Blockchain', 'DeFi', 'App'],
        },
        {
          name: 'Lee Jeng',
          employee: 'CMO Alibaba.com (RU)',
          text: '“The XTR team joined the project as a startup: work every day and a maximum level of creativity in the solutions created”',
          subtext:
            '“We were able to launch 80% of the CRM system modules in 4 months, although at the beginning of the work there was no detailed TOR. XTR assembled a professional middle+ team in 2 weeks and started development. During the project, we always saw and monitored the risk map, which allowed us to eliminate downtime due to corporate approvals and other reasons”',
          key: 'alibaba',
          country: 'China',
          width: '108',
          summary: 'CRM development',
          blocks: [
            {
              title: 'industry',
              text: 'E-commerce',
            },
            {
              title: 'team size',
              text: '13 specialists',
            },
            {
              title: 'duration',
              text: '7 months',
            },
            {
              title: 'budget',
              text: 'NDA',
            },
          ],
          tags: ['CRM', 'BPM', 'RPA', 'WFM'],
        },
        {
          name: 'David Manzini',
          employee: 'President of PepsiCo in Russia and the CIS',
          text: "“I worked with a team of creators who are able to create new scenarios of interaction with users and take into account the main objectives of the customer's business”",
          subtext:
            '“XTR has created a new vision for the development of personalized marketing, taking into account direct interaction with the customer. This will increase engagement and clearly measure the effects of personalized marketing in retail chains. We plan to use the new platform as a strategic platform during 2022-2025”',
          key: 'pepsico',
          country: 'CIS',
          width: '326',
          summary: 'Developing a meta-universe',
          blocks: [
            {
              title: 'industry',
              text: 'FMCG',
            },
            {
              title: 'team size',
              text: '8 specialists',
            },
            {
              title: 'duration',
              text: '6 months',
            },
            {
              title: 'budget',
              text: 'NDA',
            },
          ],
          tags: ['NFT', 'CRM', 'App'],
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
  watch: {
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', '#FF9B80')
    },
  },
  methods: {
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex + 1
    },
    initSwiper(swiper) {
      this.swiper = swiper
    },
    nextSlide() {
      this.swiper.slideNext()
    },
    prevSlide() {
      this.swiper.slidePrev()
    },
    handleAfterEnter() {
      this.isEntered = true
    },
    handleAfterLeave() {
      this.isEntered = false
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.reviews {
  &__grid {
    @media (max-width: 1199px) and(min-width:1024px) {
      width: 360px !important;
    }
  }
  &__subtext {
    width: 538px !important;
  }
  &__client-card {
    width: 33%;
  }
  &__tag {
    background-color: rgba(220, 220, 220, 0.7);
  }
  &__avatar-wrapper {
    width: 186px;
    min-width: 186px;
    height: 186px;
  }

  &-down {
    &-enter-active,
    &-enter-active * {
      transition: all 1000ms;
    }
    &-leave-active,
    &-leave-active * {
      transition: all 1000ms;
    }
    &-enter {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
    &-leave-to {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(-100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }

  &-up {
    &-enter-active,
    &-enter-active * {
      transition: all 1000ms;
    }
    &-leave-active,
    &-leave-active * {
      transition: all 1000ms;
    }
    &-enter {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(-100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
    &-leave-to {
      .reviews__pagination,
      .reviews__slider {
        transform: translateY(100vh);
      }
      .reviews__top-text {
        opacity: 0;
        transform: scaleY(0.1);
      }
    }
  }
}
</style>