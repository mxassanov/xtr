<template>
  <div class="text-white pt-20">
    <p class="leading-6 text-xl mb-20">
      Your customers want to find and do business with your organization entirely online, so moving your business online
      is not a choice, but a necessity. The more value you can provide through digital channels, the greater the chances
      you'll stay relevant to your customers.<br /><br />
      We help businesses invent and develop new digital products as well as optimize existing online customer services
      by researching and defining value propositions, developing delightful and valuable user experiences, and
      developing high-performance web and mobile systems.
    </p>
    <div v-for="item in currentItems" :key="item.title" class="pb-16 xs:bg-gray-2 xs:-mx-6 xs:px-6">
      <div class="pb-12 xs:py-4 flex justify-between items-start border-b xs:border-black border-white">
        <p
          class="font-medium text-2xl leading-10 duration-700"
          :class="{ 'sm:text-yellow-1 xs:text-yellow-1': item.isOpen }"
        >
          {{ item.title }}
        </p>
        <div
          class="flex justify-center items-center bg-white rounded-full w-8 h-8 min-w-8 hover:bg-yellow-1"
          :class="{ 'sm:bg-yellow-1 xs:bg-yellow-1': item.isOpen }"
          @click="item.isOpen = !item.isOpen"
          style="min-width: 32px"
        >
          <LazyImage
            :style="{ transform: `rotate(${item.isOpen ? '0' : '-180'}deg)` }"
            width="14"
            height="14"
            src="services-solutions/services/arrow.svg"
            class="duration-500 transition-all"
          />
        </div>
      </div>
      <div :style="{ 'max-height': `${item.isOpen ? '1000' : '0'}px` }" class="overflow-hidden duration-1000">
        <div
          v-for="subItem in item.list"
          :key="subItem.text"
          class="flex mt-16 items-start gap-4 md:flex-col sm:flex-col sm:gap-6 xs:flex-col"
        >
          <div class="solutions__info-wrapper md:flex-1 sm:w-full xs:w-full">
            <p v-if="subItem.title" class="font-semibold leading-7">{{ subItem.title }}</p>
            <p class="text-sm leading-6 text-gray-2 xs:text-white">{{ subItem.text }}</p>
          </div>
          <div class="flex-1 md:w-full sm:w-full xs:w-full">
            <div
              v-for="point in subItem.sublist"
              :key="point.subtitle"
              class="mb-6 border-b border-white xs:border-black pb-10 w-full flex justify-between items-center"
            >
              <div class="flex gap-6 items-start">
                <div class="solutions__image-wrapper relative xs:hidden">
                  <LazyImage
                    :src="`services-solutions/solutions/${point.key}.png`"
                    class="w-full h-full absolute object-cover rounded-10"
                  />
                  <div
                    class="w-6 h-6 rounded-full bg-white flex justify-center items-center absolute -top-2 -right-2 z-1"
                  >
                    <LazyImage
                      width="8"
                      height="8"
                      src="services-solutions/services/arrow.svg"
                      style="transform: rotate(45deg)"
                    />
                  </div>
                </div>
                <div>
                  <p class="text-2xl leading-10 font-medium text-white">{{ point.subtitle }}</p>
                  <p class="text-xl leading-6 mt-0.5 text-white">{{ point.subtext }}</p>
                </div>
              </div>
              <div class="bg-white rounded-100 py-1 px-2.5 font-semibold leading-5 text-black">{{ point.year }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import perfomanceMarketingItems from '~/utils/solutionsPerfomanceMarketing'
import itDevelopmentItems from '~/utils/solutionsItDevelopment'
import communicationDesignItems from '~/utils/solutionsCommunicationDesign'

export default {
  name: 'SolutionsBlock',
  props: {
    currentCategory: {
      type: String,
      default: 'solutions',
    },
    currentSubCategory: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      perfomanceMarketingItems,
      itDevelopmentItems,
      communicationDesignItems,
    }
  },
  computed: {
    currentItems() {
      if (this.currentSubCategory === 'IT Development') return this.itDevelopmentItems
      if (this.currentSubCategory === 'Communication Design') return this.communicationDesignItems
      return this.perfomanceMarketingItems
    },
  },
}
</script>

<style lang="scss" scoped>
.solutions {
  &__info-wrapper {
    width: 570px;
    @media (max-width: 1919px) {
      width: 410px;
    }
    @media (max-width: 1199px) {
      width: auto;
    }
  }
  &__image-wrapper {
    width: 220px;
    height: 130px;
  }
}
</style>