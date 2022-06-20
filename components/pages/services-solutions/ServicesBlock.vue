<template>
  <div class="text-white pt-20 relative">
    <p class="leading-6 text-xl mb-20">
      Standing out from the competition in today's crowded marketplace requires meaningful, valuable and relevant
      communication with customers. Your communications will be noticed and appreciated if they are focused on providing
      real help and empowerment; if they resonate with their deep values; if they help them make sense of their life
      context and illuminate their path to a meaningful experience. We help you build effective communications with your
      potential and existing clients by developing a comprehensive system of different but complementary communication
      tools that work easily across a variety of media. We implement first-class, consistent and effective solutions
      that will increase your customers' awareness, trust and loyalty to your product.
    </p>
    <div v-for="item in currentItems" :key="item.title" class="pb-16 xs:bg-gray-2 xs:-mx-6 xs:px-6 service__item">
      <div class="pb-12 xs:py-4 flex justify-between items-start border-b xs:border-black border-white">
        <p
          class="font-medium text-2xl leading-10 duration-700"
          :class="{ 'sm:text-yellow-1 xs:text-yellow-1': item.isOpen }"
        >
          {{ item.title }}
        </p>
        <div
          class="flex justify-center items-center bg-white rounded-full w-8 h-8 min-w-8 service__arrow-button hover:bg-yellow-1"
          :class="{ 'sm:bg-yellow-1 xs:bg-yellow-1': item.isOpen }"
          @click="item.isOpen = !item.isOpen"
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
          class="flex mt-16 items-start gap-4 sm:flex-col sm:gap-6 xs:flex-col"
        >
          <div class="service__info-wrapper md:flex-1 sm:w-full xs:w-full">
            <p v-if="subItem.title" class="font-semibold leading-7">{{ subItem.title }}</p>
            <p class="text-sm leading-6 text-gray-2 xs:text-white">{{ subItem.text }}</p>
          </div>
          <div class="flex-1 sm:w-full xs:w-full">
            <div
              v-for="(point, index) in subItem.sublist"
              :key="point.subtitle"
              class="mb-6 border-b border-white xs:border-black pb-6 service__list-item"
            >
              <div class="flex justify-between items-center">
                <div class="flex gap-4 items-center">
                  <p class="text-white font-semibold leading-5">{{ index + 1 }}</p>
                  <p class="text-white font-medium leading-5 service__subtitle">{{ point.subtitle }}</p>
                </div>
                <div
                  style="min-width: 32px"
                  class="bg-white w-8 h-8 rounded-full flex justify-center items-center service__icon-wrapper"
                  @click="currentSubCategory === 'IT Development' ? onPromptClick(point) : null"
                >
                  <LazyImage width="10" height="20" src="services-solutions/services/question.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PromptModal :prompt="promptCurrent" :show="isShowPrompt" @close="isShowPrompt = false" />
  </div>
</template>

<script>
import PromptModal from '@/components/pages/services-solutions/PromptModal.vue'
import itDevelopmentItems from '~/utils/servicesItDevelopment'
import communicationDesignItems from '~/utils/servicesCommunicationDesign'
import perfomanceMarketingItems from '~/utils/servicesPerfomanceMarketing'

export default {
  name: 'ServicesBlock',
  components: { PromptModal },
  props: {
    currentCategory: {
      type: String,
      default: 'services',
    },
    currentSubCategory: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      promptCurrent: {},
      isShowPrompt: false,
      itDevelopmentItems,
      communicationDesignItems,
      perfomanceMarketingItems,
    }
  },
  computed: {
    currentItems() {
      if (this.currentSubCategory === 'IT Development') return this.itDevelopmentItems
      if (this.currentSubCategory === 'Communication Design') return this.communicationDesignItems
      return this.perfomanceMarketingItems
    },
  },
  methods: {
    onPromptClick(prompt) {
      this.promptCurrent = prompt
      this.isShowPrompt = !this.isShowPrompt
    },
  },
}
</script>

<style lang="scss" scoped>
.service {
  &__info-wrapper {
    width: 570px;
    @media (max-width: 1919px) {
      width: 410px;
    }
    @media (max-width: 1199px) {
      width: auto;
    }
  }
  &__list-item:hover {
    .service__subtitle {
      color: #fff500 !important;
    }
    .service__icon-wrapper {
      background: #fff500 !important;
    }
  }
}
</style>
