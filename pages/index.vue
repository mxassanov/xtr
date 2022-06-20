<template>
  <div class="index">
    <div
      :style="{ 'background-color': bgColor, transition: `background-color ${isMounted ? '1000' : '0'}ms` }"
      class="relative h-screen xs:h-auto overflow-hidden xs:hidden"
    >
      <Header :order="1" />
      <CasePage :order="2" />
      <TrustPartners :order="3" />
      <ServicesSolutions :order="4" />
      <AdvantagesList :order="5" />
      <StackList :order="6" />
      <ProcessesList :order="7" />
      <DealsList :order="8" />
      <ReviewsList :order="9" />
      <ContactWindow :order="10" :isLast="false" />
      <CasesSwiper :order="11" :isLast="true" />
    </div>
    <IndexMobile class="hidden xs:block" />
  </div>
</template>

<script>
import Header from '@/components/pages/index/Header.vue'
import CasePage from '@/components/pages/index/CasePage.vue'
import TrustPartners from '@/components/pages/index/TrustPartners.vue'
import ServicesSolutions from '@/components/pages/index/ServicesSolutions.vue'
import AdvantagesList from '@/components/pages/index/AdvantagesList.vue'
import StackList from '@/components/pages/index/StackList.vue'
import ProcessesList from '@/components/pages/index/ProcessesList.vue'
import DealsList from '@/components/pages/index/DealsList.vue'
import ReviewsList from '@/components/pages/index/ReviewsList.vue'
import ContactWindow from '@/components/shared/ContactWindow.vue'
import CasesSwiper from '@/components/shared/CasesSwiper.vue'

import IndexMobile from '@/components/pages/index/indexMobile/IndexMobile'

export default {
  name: 'IndexPage',
  components: {
    Header,
    CasePage,
    TrustPartners,
    ServicesSolutions,
    AdvantagesList,
    StackList,
    ProcessesList,
    DealsList,
    ReviewsList,
    ContactWindow,
    CasesSwiper,
    IndexMobile,
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    bgColor() {
      return this.$store.state.indexBgColor
    },
  },
  methods: {
    keyHandler(event) {
      if (this.$store.state.offScroll) return

      if (event.code === 'ArrowDown') {
        this.$store.dispatch('setSection', this.$store.state.indexCurrentSection + 1)
      }
      if (event.code === 'ArrowUp') {
        this.$store.dispatch('setSection', this.$store.state.indexCurrentSection - 1)
      }
    },
  },
  mounted() {
    this.$store.commit('changeBgColor', 'black')
    setTimeout(() => {
      this.isMounted = true
    }, 50)

    window.addEventListener('keydown', this.keyHandler)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keyHandler)
  },
}
</script>
