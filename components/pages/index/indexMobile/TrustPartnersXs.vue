<template>
  <client-only>
    <div class="partners-xs bg-black pt-20 px-6">
      <p class="text-white font-semibold text-2xl leading-8">We are trusted</p>
      <p class="mt-2 text-white font-medium leading-5">
        We successfully work with the largest corporations and startups from around the world
      </p>
      <swiper
        style="width: 298px"
        :options="options"
        class="mt-24 mx-auto overflow-visible"
        @slideChange="handleSlideChange"
      >
        <swiper-slide v-for="(partner, index) in partners" :key="index">
          <div
            class="partners-xs__slide rounded-full border flex flex-col justify-center items-center duration-500"
            :class="index === currentSlide ? 'border-yellow-1' : ' border-gray-2'"
          >
            <div class="relative">
              <LazyImage width="80" height="80" :src="`index/partners/${index + 1}.svg`" />
              <LazyImage
                width="80"
                height="80"
                :src="`index/partners/colored-${index + 1}.svg`"
                class="absolute top-0 left-0 z-1"
                :class="{ 'opacity-0': index !== currentSlide }"
              />
            </div>
            <p
              style="max-width: 79%"
              class="mt-4 text-xs leading-4 text-center font-medium duration-500"
              :class="index === currentSlide ? 'text-white' : ' text-gray-2'"
            >
              {{ partner.text }}
            </p>
            <LazyImage width="30" height="26" alt="qoutes" src="index/partners/qoutes.svg" class="mt-4" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="mt-36 h-2 w-32 bg-yellow-1 rounded-10 mx-auto p-0.5">
        <div
          :style="{
            transform: `translateX(${currentSlide * (104 / partners.length)}px)`,
          }"
          class="w-8 bg-black h-full rounded-10 duration-500"
        ></div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'TrustPartnersXs',
  data() {
    return {
      options: {
        spaceBetween: -18,
      },
      currentSlide: 0,
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
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex
    },
  },
}
</script>

<style lang="scss">
.partners-xs {
  padding-bottom: 114px;

  &__slide {
    width: 298px;
    aspect-ratio: 1/1;
  }
}
</style>