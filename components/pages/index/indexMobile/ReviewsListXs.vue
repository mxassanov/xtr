<template>
  <client-only>
    <div class="pt-10 pb-14 px-6 text-white bg-black reviews-xs">
      <p class="font-semibold text-2xl leading-8">Reviews</p>
      <p class="mt-2 font-medium leading-5">
        SMB, enterprise, and startup clients return to us because they’re happy with our work. Here’s what they say
        about XTR
      </p>
      <div class="mt-10 flex justify-between items-center">
        <div class="w-8 h-8 bg-white rounded-full flex justify-center items-center" @click="goPrevSlide">
          <LazyImage width="14" height="14" src="index/reviews/arrow-left.svg" />
        </div>
        <div class="gap-2 flex items-center">
          <p class="text-yellow-1 text-xl leading-6">{{ currentSlide }}</p>
          <div class="bg-white h-px w-32 relative">
            <div
              :style="{
                transform: `scaleX(${currentSlide / reviews.length})`,
              }"
              class="bg-yellow-1 absolute top-0 left-0 origin-left w-full h-full duration-1000"
            ></div>
          </div>
          <p class="text-yellow-1 text-xl leading-6">{{ reviews.length }}</p>
        </div>
        <div class="w-8 h-8 bg-white rounded-full flex justify-center items-center" @click="goNextSlide">
          <LazyImage width="14" height="14" src="index/reviews/arrow-right.svg" />
        </div>
      </div>
      <swiper :options="options" class="mt-10 overflow-visible" @slideChange="handleSlideChange" @ready="initSwiper">
        <swiper-slide
          v-for="(review, index) in reviews"
          :key="review.key + index"
          class="py-6 px-3 bg-white rounded-12 h-full flex flex-col reviews-xs__slide"
        >
          <LazyImage :width="review.width" :height="review.height" :src="`index/reviews/${review.key}.png`" />
          <div class="flex gap-2 mt-4">
            <div class="rounded-full w-10 h-10 overflow-hidden">
              <LazyImage
                :src="`index/reviews/${review.key}-employee.png`"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p class="text-black font-semibold leading-5">
                {{ review.name }}
              </p>
              <p class="mt-1 font-bold text-xs leading-4 text-gray-2">
                {{ review.company }}
              </p>
            </div>
          </div>
          <p class="mt-3 leading-5 text-black">
            „Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor“
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <div
              v-for="(tag, index) in review.tags"
              :key="tag + index"
              class="
                reviews-xs__tag
                rounded-100
                flex
                justify-center
                items-center
                py-1.5
                px-3
                font-bold
                text-xs
                leading-4
              "
            >
              {{ tag }}
            </div>
          </div>
          <div class="bg-gray-2 text-white reviews__grid mt-8 rounded-10 w-full grid grid-cols-2 grid-rows-2">
            <div
              v-for="block in review.blocks"
              :key="block.title"
              class="flex flex-col justify-center items-center py-5"
            >
              <p class="text-xs leading-4 font-semibold text-white uppercase">
                {{ block.title }}
              </p>
              <p class="mt-1 leading-5">{{ block.text }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'ReviewsListXs',
  data() {
    return {
      swiper: {},
      currentSlide: 1,
      options: {
        spaceBetween: 8,
      },
      reviews: [
        {
          key: 'blockchain',
          name: 'Peter Smith',
          company: 'CEO and Co-Founder at Blockchain.com',
          text: '“The XTR team got involved in the process and contributed a lot to the business logic of the processes. We quickly became part of the team”',
          tags: ['BLOCKCHAIN', 'DEFI', 'APP'],
          width: '147',
          height: '25',
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
        },
        {
          key: 'alibaba',
          name: 'Lee Jeng',
          company: 'CMO Alibaba.com (RU)',
          text: '“The XTR team joined the project as a startup: work every day and a maximum level of creativity in the solutions created”',
          width: '48',
          height: '25',
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
          key: 'pepsico',
          name: 'David Manzini',
          company: 'President of PepsiCo in Russia and the CIS',
          text: "“I worked with a team of creators who are able to create new scenarios of interaction with users and take into account the main objectives of the customer's business”",
          width: '88',
          height: '25',
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
          tags: ['NFT', 'CRM', 'APP'],
        },
      ],
    }
  },
  methods: {
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex + 1
    },
    initSwiper(swiper) {
      this.swiper = swiper
    },
    goPrevSlide() {
      this.swiper.slidePrev()
    },
    goNextSlide() {
      this.swiper.slideNext()
    },
  },
}
</script>

<style lang="scss">
.reviews-xs {
  &__tag {
    background: rgba(107, 107, 107, 0.8);
  }
}
</style>