export default {
  data() {
    return {
      offScroll: false,
      isScrollContainerExist: false,
      isScrollOccured: false,
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
    }
  },
  methods: {
    wheelHandler(event) {
      if (window.innerWidth <= 1199) return
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.$store.state.offScroll || event.ctrlKey) return
      if (this.isScrollContainerExist) this.isScrollOccured = false

      if (event.deltaY > 0) {
        if (this.$props.isLast) return
        setTimeout(() => {
          if (this.isScrollOccured) return
          this.$store.dispatch('setSection', this.currentSection + 1)
        }, 50)
      } else {
        if (this.$props.isFirst) return

        setTimeout(() => {
          if (this.isScrollOccured) return
          this.$store.dispatch('setSection', this.currentSection - 1)
        }, 50)
      }
    },
    touchStartHandler(event) {
      this.touchStartX = event.changedTouches[0].screenX
      this.touchStartY = event.changedTouches[0].screenY
      this.isScrollOccured = false
    },
    touchEndHandler(event) {
      if (window.innerWidth > 1199) return
      if (this.isScrollOccured) return
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
      this.diffX = Math.abs(this.touchEndX - this.touchStartX)
      this.diffY = Math.abs(this.touchEndY - this.touchStartY)
      if (this.diffY > this.diffX && this.touchEndY - this.touchStartY > 70) {
        if (this.$props.isFirst) return
        this.$store.dispatch('setSection', this.currentSection - 1)
      }
      if (this.diffY > this.diffX && this.touchEndY < this.touchStartY) {
        if (this.$props.isLast) return
        this.$store.dispatch('setSection', this.currentSection + 1)
      }
    },
    scrollHandler() {
      this.isScrollOccured = true
    },
  },
  mounted() {
    if (this.$refs.scrollContainer) this.isScrollContainerExist = true

    this.$refs.mainContainer.addEventListener('wheel', this.wheelHandler)

    this.$refs.mainContainer.addEventListener('touchstart', this.touchStartHandler)

    this.$refs.mainContainer.addEventListener('touchend', this.touchEndHandler)

    if (this.isScrollContainerExist) this.$refs.scrollContainer.addEventListener('scroll', this.scrollHandler)
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener('wheel', this.wheelHandler)

    this.$refs.mainContainer.removeEventListener('touchstart', this.touchStartHandler)

    this.$refs.mainContainer.removeEventListener('touchend', this.touchEndHandler)

    if (this.isScrollContainerExist) this.$refs.scrollContainer.removeEventListener('scroll', this.scrollHandler)
  },
}
