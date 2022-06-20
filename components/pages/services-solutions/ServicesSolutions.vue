<template>
  <div class="bg-black px-24 md:px-16 sm:px-8 xs:px-6">
    <div class="xl:flex items-center justify-between">
      <div class="servsol__switcher flex gap-6">
        <client-only>
          <swiper :options="secondOptions" class="ml-0 mr-0">
            <swiper-slide class="w-max">
              <p
                class="font-medium servsol__title"
                :class="currentCategory === 'services' ? 'text-white' : 'text-gray-2'"
                @click="currentCategory = 'services'"
              >
                Services
              </p>
            </swiper-slide>

            <swiper-slide class="w-max">
              <p class="font-medium servsol__title text-white">&</p>
            </swiper-slide>
            <swiper-slide class="w-max">
              <p
                class="font-medium servsol__title"
                :class="currentCategory === 'solutions' ? 'text-white' : 'text-gray-2'"
                @click="currentCategory = 'solutions'"
              >
                Solutions
              </p>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <div class="xl:flex flex-col xl:mt-60">
        <p class="text-white leading-5 font-medium servsol__subtext mt-6">
          Become a leader in your segment through innovative product development, unique design and UI/UX, effective
          digital marketing and it-development
        </p>
        <div class="mt-4 flex items-center">
          <LazyImage width="48" height="48" src="cases/header/qoutes.svg" />
          <LazyImage width="48" height="48" src="cases/header/founder.png" class="relative -left-3" />
          <div class="relative -left-1.5">
            <p class="font-bold text-sm leading-4 text-white">Ilya Trofimenko</p>
            <p class="text-gray-9 text-sm leading-4">co-founder</p>
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <swiper :options="options" class="w-full overflow-visible mt-20">
        <swiper-slide
          v-for="subCategory in subCategories"
          :key="subCategory"
          class="rounded-20 xs:rounded-10 pt-6 px-10 pb-8 xs:py-0 xs:h-12 xs:px-2 xs:flex justify-center items-center"
          :class="currentSubCategory === subCategory ? 'bg-white' : 'bg-gray-2'"
          @click.native="currentSubCategory = subCategory"
        >
          <p
            class="font-semibold text-xl leading-6 mt-2 xs:text-xs xs:leading-4 xs:w-full xs:mt-0 xs:uppercase"
            :class="currentSubCategory === subCategory ? 'text-black ' : 'text-white'"
          >
            {{ subCategory }}
          </p>
        </swiper-slide>
      </swiper>
    </client-only>

    <component
      :is="currentCategory === 'services' ? 'ServicesBlock' : 'SolutionsBlock'"
      :currentCategory="currentCategory"
      :currentSubCategory="currentSubCategory"
    />
  </div>
</template>

<script>
import ServicesBlock from '@/components/pages/services-solutions/ServicesBlock.vue'
import SolutionsBlock from '@/components/pages/services-solutions/SolutionsBlock.vue'

export default {
  name: 'ServicesSolutions',
  components: { ServicesBlock, SolutionsBlock },
  data() {
    return {
      currentCategory: 'services',
      currentSubCategory: 'IT Development',
      subCategories: ['IT Development', 'Communication Design', 'Perfomance Marketing'],

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
            slidesPerView: 3,
          },
        },
      },

      secondOptions: {
        spaceBetween: 20,
        slidesPerView: 1.8,
        breakpoints: {
          565: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          744: {
            spaceBetween: 24,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 24,
            slidesPerView: 3,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.servsol {
  &__title {
    font-size: 100px;
    line-height: 120px;
    @media (max-width: 1199px) {
      font-size: 85px;
      line-height: 110px;
    }
    @media (max-width: 743px) {
      font-size: 50px;
      line-height: 60px;
    }
  }
  &__switcher {
    padding-top: 240px;
    @media (max-width: 1199px) {
      padding-top: 213px;
    }
    @media (max-width: 743px) {
      padding-top: 186px;
    }
  }
  &__subtext {
    max-width: 515px;
  }
}
</style>
