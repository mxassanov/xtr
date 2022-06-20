<template>
  <div class="overflow-x-hidden">
    <div class="cases__swiper-block">
      <client-only>
        <swiper :options="options" class="w-full h-full overflow-visible cases__swiper px-24 md:px-16 sm:px-8 xs:px-6">
          <swiper-slide
            v-for="category in categories"
            :key="category.value"
            class="h-full rounded-20 xs:rounded-10 px-10 xs:pt-0 xs:px-2 flex justify-center items-center"
            :class="currentCategory === category.value ? 'bg-white' : 'bg-gray-2'"
            @click.native="currentCategory = category.value"
          >
            <span
              class="font-semibold text-xl leading-6 xs:text-xs xs:leading-4 xs:w-full xs:mt-0 xs:uppercase"
              :class="currentCategory === category.value ? 'text-black' : 'text-white'"
            >
              {{ category.title }}
            </span>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
    <div
      class="py-20 bg-black px-6 sm:px-8 md:px-16 grid"
      :class="
        currentCategory === ''
          ? 'xl:px-24 lg:px-24 grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4'
          : 'lg:px-0 xl:px-0 grid-cols-1 gap-20'
      "
    >
      <div
        v-for="(caseItem, index) in filteredCases"
        :key="caseItem.key"
        class="flex"
        :class="[
          currentCategory === ''
            ? 'flex-col h-full'
            : 'flex-col lg:flex-row xl:flex-row cases__certain-wrapper gap-8 md:gap-6 xs:gap-4 lg:items-center xl:items-center',
        ]"
      >
        <div
          class="relative w-full overflow-hidden"
          :class="[
            currentCategory === '' ? 'cases__shared-image rounded-t-20' : 'cases__certain-image lg:flex-1 xl:flex-1',
            {
              'xl:order-1 lg:order-1 rounded-l-20 md:rounded-20 sm:rounded-20 xs:rounded-20':
                index % 2 === 0 && currentCategory !== '',
            },
            { 'rounded-r-20 md:rounded-20 sm:rounded-20 xs:rounded-20': index % 2 === 1 && currentCategory !== '' },
          ]"
        >
          <LazyImage :src="`cases/caselist/${caseItem.key}.png`" class="object-cover w-full h-full" />
          <div
            class="cases__tag-wrapper absolute top-4 left-4 flex flex-wrap gap-2"
            :class="{ 'lg:hidden xl:hidden': currentCategory !== '' }"
          >
            <div
              v-for="tag in caseItem.tag"
              :key="tag"
              :style="{ 'background-color': caseItem.color }"
              class="rounded-100 py-1.5 px-3 font-bold text-white text-sm leading-4"
            >
              {{ tag }}
            </div>
          </div>
        </div>
        <div
          v-if="currentCategory === ''"
          :style="{ 'background-color': caseItem.color }"
          class="p-4 pb-10 text-white w-full rounded-b-20 flex-1"
        >
          <p class="xl:text-3xl xl:leading-10 font-medium text-2xl leading-8">{{ caseItem.company }}</p>
          <p class="leading-5 font-medium mt-2 lg:mt-1">{{ caseItem.subtext }}</p>
        </div>
        <div
          v-else
          class="lg:flex-1 xl:flex-1 text-white"
          :class="{ 'lg:flex xl:flex flex-col items-end lg:text-right xl:text-right': index % 2 === 0 }"
        >
          <div class="cases__tag-wrapper md:hidden sm:hidden xs:hidden flex flex-wrap gap-2"
          :class="{ 'justify-end': index % 2 === 0 }">
            <div
              v-for="tag in caseItem.tag"
              :key="tag"
              :style="{ 'background-color': caseItem.color }"
              class="rounded-100 py-1.5 px-3 font-bold text-white text-sm leading-4"
            >
              {{ tag }}
            </div>
          </div>
          <p class="font-medium leading-5 mt-4">
            {{ caseItem.company + ', ' + caseItem.subtext }}
          </p>
          <p
            class="
              font-medium
              cases__case-title
              mt-4
              sm:mt-3
              xs:mt-2
              sm:text-2xl sm:leading-10
              xs:text-2xl xs:leading-7 xs:font-semibold
            "
            :class=" { 'lg:pr-24 xl:pr-24': index % 2 === 1, 'lg:pl-24 xl:pl-24': index % 2 === 0 },"
          >
            {{ caseItem.title }}
          </p>
          <p
            class="leading-6 xl:text-xl mt-6 text-base sm:mt-4 xs:mt-2"
            :class=" { 'lg:pr-24 xl:pr-24': index % 2 === 1, 'lg:pl-24 xl:pl-24': index % 2 === 0 },"
          >
            {{ caseItem.description }}
          </p>
          <div class="mt-5 flex gap-2 items-center cases__view-case opacity-50 hover:opacity-100 duration-500">
            <p class="text-left text-xl leading-6 font-medium text-gray-12 duration-500">View Case study</p>
            <div class="w-8 h-8 flex justify-center items-center rounded-full bg-gray-12 duration-500">
              <LazyImage width="14" height="14" src="cases/caselist/arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseList',
  data() {
    return {
      options: {
        spaceBetween: 8,
        slidesPerView: 2,
        breakpoints: {
          744: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
          1440: {
            spaceBetween: 16,
            slidesPerView: 3,
          },
          1920: {
            spaceBetween: 16,
            slidesPerView: 4,
          },
        },
      },
      categories: [
        {
          title: 'View all cases',
          tag: '200+',
          value: '',
        },
        {
          title: 'IT Development',
          tag: 'App & Web',
          value: 'App & Web',
        },
        {
          title: 'Communication Design',
          tag: 'Machine Learning',
          value: 'Machine Learning',
        },
        {
          title: 'Performance marketing',
          tag: 'Biometrics',
          value: 'Biometrics',
        },
      ],

      cases: [
        {
          company: 'Blockchain.com',
          subtext: 'Application for mobile',
          title: 'The one-week release cycle has been reached',
          description:
            'introduce recommendation systems and currency arbitrage, as well as the growth of the investor community',
          key: 'blockchain',
          tag: ['App & Web', 'DeFi', 'Biometrics'],
          color: '#B3743D',
        },
        {
          company: 'Deutsche Bank',
          subtext: 'System optimization',
          title: 'Create a business process management system to manage customer experience',
          description: 'Release cycle is 45 percent faster +19 percent increase in NPS (Central Europe)',
          key: 'bank',
          tag: ['BPMS', 'Strategic consulting'],
          color: '#8479FF',
        },
        {
          company: 'Alibaba.com',
          subtext: 'CRM development for customer service',
          title: 'The initial version was launched in less than two months',
          description:
            'Develop a CRM for customer experience, incorporating an omni-channel platform and a golden record system, as well as an omni-channel platform and a golden record system.',
          key: 'alibaba',
          tag: ['App & Web', 'CRM, ERP, MDM, BPMS'],
          color: '#D74E28',
        },
        {
          company: 'Talanty.online',
          subtext: 'HR Portal',
          title: '(1) Release cycle is 45 percent faster (2) +19 percent increase in NPS (Central Europe)',
          description:
            "(1) At the level of the bank's central office, audit and implement targeted IT development processes. (2) Create a business process management system (bpms) to manage customer experience procedures.",
          key: 'talant',
          tag: ['BPMS', 'Strategic consulting', 'Machine Learning'],
          color: '#948373',
        },
        {
          company: 'PepsiCo',
          subtext: 'Developing a meta-universe',
          title: 'Design and development in 2 months',
          description: 'Develop a character meta-universe with generative NFT to volley customers in offline retail',
          key: 'pepsico',
          tag: ['Biometrics', 'CRM', 'Machine Learning'],
          color: '#7C96E5',
        },
        {
          company: 'Auchan',
          subtext: 'CRM development for customer service',
          title: 'EBITDA growth of loyalty program participants from +5%',
          description: 'Develop a training system of target marketing models for user LTV growth',
          key: 'auchan',
          tag: ['CX', 'Target marketing', 'Machine Learning'],
          color: '#D19914',
        },
        {
          company: 'Nestlé',
          subtext: 'Mobile app for testing',
          title: 'Conversion to app usage 34%',
          description:
            'Develop a mobile app and mechanics for engaging loyal customers in testing new products and generating reviews on social networks and mapping services',
          key: 'nestle',
          tag: ['Biometrics', 'App & Web', 'Machine Learning'],
          color: '#509BFD',
        },
        {
          company: 'GetBlock',
          subtext: 'Interface design',
          title: 'Design and development in 1 month',
          description: 'Design interfaces and implement frontend development',
          key: 'getblock',
          tag: ['Blockchain'],
          color: '#13854E',
        },
        {
          company: 'Doordash.com',
          subtext: 'Setting up/designing CI/CD processes',
          title: 'Deployment Time reduced by 23% compared to other projects of the company',
          description:
            'Setting up/designing CI/CD processes, setting up Docker - containerizing existing services, deploying to Swarm. Setting up and maintaining Ceph-RGW clusters.',
          key: 'doordash',
          tag: ['App & Web', 'DevOps'],
          color: '#A23432',
        },
        {
          company: 'Disney.ru',
          subtext: 'Storage systems',
          title: 'System operability at the TIER-3 level is ensured',
          description: 'Building a Clustered Storage System with Load Balancing',
          key: 'disney',
          tag: ['App & Web', 'Data Storages'],
          color: '#FF9D0B',
        },
      ],

      currentCategory: '',
    }
  },
  computed: {
    filteredCases() {
      return this.cases.filter((item) => item.tag.includes(this.currentCategory) || this.currentCategory === '')
    },
  },
}
</script>

<style lang="scss" >
.cases {
  &__tag-wrapper {
    max-width: 328px;
  }

  &__view-case {
    &:hover {
      & > p {
        color: white !important;
      }
      & > div {
        background: white !important;
      }
    }
  }

  &__swiper {
    background: linear-gradient(360deg, rgba(2, 0, 36, 1) 0%, rgba(150, 152, 162, 1) 53%, rgba(223, 223, 223, 1) 83%);
  }

  &__swiper-block {
    height: 116px;
    @media (max-width: 743px) {
      height: 44px;
    }
  }

  &__shared-image {
    height: 305px;
    @media (max-width: 1919px) {
      height: 250px;
    }
  }

  &__certain-wrapper {
    gap: 146px;
  }

  &__certain-image {
    height: 1025px;
    @media (max-width: 1919px) {
      height: 756px;
    }
    @media (max-width: 1199px) {
      height: 625px;
    }
    @media (max-width: 1023px) {
      height: 490px;
    }
    @media (max-width: 743px) {
      height: 290px;
    }
  }
  &__case-title {
    font-size: 50px;
    line-height: 60px;

    @media (max-width: 1919px) {
      font-size: 44px;
      line-height: 50px;
    }
  }
}
</style>