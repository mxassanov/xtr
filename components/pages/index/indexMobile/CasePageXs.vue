<template>
  <div
    :style="{ 'background-color': `${cases[currentSlide].color}` }"
    class="casepage-xs px-6 pt-10 pb-8 duration-1000"
  >
    <p class="text-2xl text-white leading-8 font-semibold">Selected Works</p>
    <client-only>
      <swiper :options="options" class="mt-6 overflow-visible" @slideChange="handleSlideChange">
        <swiper-slide
          style="min-height: 567px"
          v-for="(slide, index) in cases"
          :key="slide.title"
          class="flex flex-col justify-between"
        >
          <div class="w-full">
            <div class="relative">
              <div class="absolute top-2.5 left-3 casepage-xs__tag-block flex flex-wrap gap-2">
                <div
                  v-for="tag in slide.tags"
                  :key="tag"
                  class="casepage-xs__tag py-1.5 px-3 font-bold text-sm leading-4 rounded-100"
                  :class="`text-case-${index !== 6 ? 'text-' : ''}${index + 1}`"
                >
                  {{ tag }}
                </div>
              </div>
              <div class="casepage-xs__title-wrapper absolute left-0">
                <p class="text-white font-medium text-3xl leading-9">
                  {{ slide.title }}
                </p>
                <p class="text-2xl leading-8 font-semibold" :class="`text-case-text-${index + 1}`">
                  {{ slide.subtitle }}
                </p>
              </div>
              <LazyImage width="327" height="228" :src="`index/cases/${index + 1}.png`" class="w-full" />
            </div>
            <p class="text-white text-sm leading-4 font-medium mt-12">
              <span class="font-bold">{{ slide.advantage.title }}</span>
              {{ slide.advantage.text }}
            </p>
            <p class="mt-4 text-white text-sm leading-4 font-medium">
              <span class="font-bold">Stack:</span>
              {{ slide.stack }}
            </p>
            <p class="mt-2 text-white text-sm leading-4 font-medium">
              <span class="font-bold">Task:</span>
              {{ slide.task }}
            </p>
            <p class="mt-4 text-sm leading-4 text-white font-bold">
              {{ slide.present }}
            </p>
          </div>
          <button
            class="bg-white w-full h-12 font-medium text-xl leading-6 flex justify-center items-center rounded-100 mt-3"
          >
            More Details
          </button>
        </swiper-slide>
      </swiper>
    </client-only>
    <div class="mt-8 h-2 w-32 bg-yellow-1 rounded-10 mx-auto p-0.5">
      <div
        :style="{
          transform: `translateX(${currentSlide * (106 / cases.length)}px)`,
        }"
        class="w-8 bg-black h-full rounded-10 duration-500"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CasePageXs',
  data() {
    return {
      currentSlide: 0,
      options: {
        spaceBetween: 15,
      },
      cases: [
        {
          title: 'Alibaba.com',
          subtitle: 'CRM development',
          link: 'Alibaba.com',
          tags: ['App & Web', 'CRM', 'Machine Learning'],
          advantage: {
            title: 'Super-fast:',
            text: 'the initial version was launched in less than two months',
          },
          stack: 'C++, Python',
          task: 'Develop a CRM for customer experience, incorporating an omni-channel platform and a golden record system, as well as an omni-channel platform and a golden record system.',
          present: '2021→present',
          color: '#FF9B80',
        },
        {
          title: 'Blockchain.com',
          subtitle: 'Application for mobile',
          link: 'Blockchain.com',
          tags: ['Blockchain', 'DeFi'],
          advantage: {
            title: 'KPI:',
            text: 'The one-week release cycle has been reached',
          },
          stack: 'Python, Tezos, NEAR protocol, C-Chain (Avalanche)',
          task: 'introduce recommendation systems and currency arbitrage, as well as the growth of the investor community',
          present: '2021→present',
          color: '#EBA35D',
        },
        {
          title: 'Deutsche Bank',
          subtitle: 'System optimization',
          link: 'deutschebank.com',
          tags: ['BPMS', 'Strategic consulting'],
          advantage: {
            title: 'KPI:',
            text: '(1) Release cycle is 45 percent faster (2) +19 percent increase in NPS (Central Europe)',
          },
          stack: 'C++, Python',
          task: "(1) At the level of the bank's central office, audit and implement targeted IT development processes. (2) Create a business process management system (bpms) to manage customer experience procedures.",
          present: '2021→present',
          color: '#8479FF',
        },
        {
          title: 'Talanty.online',
          subtitle: 'HR Portal',
          link: 'talanty.online',
          tags: ['BPMS', 'Strategic consulting'],
          advantage: {
            title: 'KPI:',
            text: '(1) Release cycle is 45 percent faster (2) +19 percent increase in NPS (Central Europe)',
          },
          stack: 'C++, Python',
          task: "(1) At the level of the bank's central office, audit and implement targeted IT development processes. (2) Create a business process management system (bpms) to manage customer experience procedures.",
          present: '2021→present',
          color: '#E6CDB6',
        },
        {
          title: 'PepsiCo',
          subtitle: 'Developing a meta-universe',
          link: 'pepsico.com',
          tags: ['NFT', 'CRM'],
          advantage: {
            title: 'KPI:',
            text: 'Design and development in 2 months',
          },
          stack: 'Python, С++',
          task: 'Develop a character meta-universe with generative NFT to volley customers in offline retail',
          present: '2022→present',
          color: '#98B2FF',
        },
        {
          title: 'Auchan',
          subtitle: 'Targeted marketing models',
          link: 'auchan.com',
          tags: ['CX', 'Target marketing', 'Machine Learning'],
          advantage: {
            title: 'KPI:',
            text: 'EBITDA growth of loyalty program participants from +5%',
          },
          stack: 'Python, DML',
          task: 'Develop a training system of target marketing models for user LTV growth',
          present: '2019-2020',
          color: '#F2C459',
        },
        {
          title: 'Nestlé',
          subtitle: 'Mobile app for testing',
          link: 'nestle.com',
          tags: ['CX', 'app'],
          advantage: {
            title: 'KPI:',
            text: 'Conversion to app usage 34%',
          },
          stack: 'PHP, Python',
          task: 'Develop a mobile app and mechanics for engaging loyal customers in testing new products and generating reviews on social networks and mapping services',
          present: '2021',
          color: '#509BFD',
        },
      ],
    }
  },
  methods: {
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex
    },
  },
}
</script>

<style lang="scss">
.casepage-xs {
  &__tag {
    background: rgba(255, 255, 255, 0.8);
  }
  &__tag-block {
    width: 80%;
  }
  &__title-wrapper {
    bottom: -48px;
  }
}
</style>