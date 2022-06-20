<template>
  <div class="commerce">
    <div
      :style="{ 'background-color': bgColor, transition: `background-color ${isMounted ? '1000' : '0'}ms` }"
      class="relative h-screen md:h-auto sm:h-auto xs:h-auto overflow-hidden md:hidden sm:hidden xs:hidden"
    >
      <Header :order="1" />
      <ToolList :order="2" />
      <ReviewsList :order="3" />
      <ContactWindow :order="4" isLast />
    </div>
    <CommerceMobile class="hidden sm:block xs:block md:block" />
  </div>
</template>

<script>
import Header from '@/components/pages/commerce/Header.vue'
import ToolList from '@/components/pages/commerce/ToolList.vue'
import ReviewsList from '@/components/pages/index/ReviewsList.vue'
import ContactWindow from '@/components/shared/ContactWindow.vue'
import CommerceMobile from '@/components/pages/commerce/CommerceMobile.vue'

export default {
  name: 'Commerce',
  layout: 'notMain',
  components: { Header, ToolList, ReviewsList, ContactWindow, CommerceMobile },
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