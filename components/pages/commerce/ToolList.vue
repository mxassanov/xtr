<template>
  <transition :name="scrollDirection === 'down' ? 'tool-down' : 'tool-up'">
    <div
      ref="mainContainer"
      v-show="isVisible"
      class="w-full top-0 left-0"
      :class="order === 'default' ? 'bg-black pb-20' : 'absolute h-screen '"
    >
      <div ref="scrollContainer" class="w-full h-full text-white pl-24 md:px-16 sm:px-8 xs:px-6 overflow-y-scroll">
        <div class="flex gap-20 h-full tool__container md:hidden sm:hidden xs:hidden">
          <div class="flex-1 pt-28 flex gap-12 overflow-hidden">
            <div class="w-8 h-full">
              <div class="w-0.5 h-full bg-white mx-auto"></div>
            </div>
            <div class="flex-1 h-full relative">
              <div
                v-for="(tool, index) in toolItems"
                :key="tool.title"
                class="w-full absolute left-0 tool__slide duration-1000"
                :class="[
                  `tool__slide_${index + 1}`,
                  {
                    'in-list': index + 1 < currentSlide,
                    current: index + 1 === currentSlide,
                    next: index === currentSlide,
                    invisible: index > currentSlide,
                  },
                ]"
              >
                <div
                  style="left: -72px"
                  class="rounded-full absolute top-0 transform w-4 h-4 duration-1000"
                  :class="index + 1 === currentSlide ? 'bg-yellow-1 scale-150' : 'bg-white'"
                ></div>
                <p
                  class="font-semibold duration-1000 text-white"
                  :class="index + 2 > currentSlide ? 'text-2xl xl:text-3xl xl:leading-10 leading-8' : 'leading-5'"
                >
                  {{ tool.title }}
                </p>
                <div class="mt-6 lg:mt-4 duration-700" :class="{ 'opacity-0': index + 1 !== currentSlide }">
                  <p class="font-semibold leading-5">Tools</p>
                  <div class="mt-2">
                    <p v-for="item in tool.tools" :key="item" class="text-sm leading-6 pl-4 tool__item-list">
                      {{ item }}
                    </p>
                  </div>
                  <p class="font-semibold leading-5 mt-1">Results</p>
                  <div class="mt-2">
                    <p v-for="item in tool.results" :key="item" class="text-sm leading-6 pl-4 tool__item-list">
                      {{ item }}
                    </p>
                  </div>
                  <p class="font-semibold leading-5 mt-1 xl:text-xl xl:leading-6">Timeline to Target</p>
                  <div class="mt-2">
                    <p class="lg:text-sm lg:leading-6 pl-4 tool__item-list">
                      {{ tool.timeline }}
                    </p>
                  </div>
                  <div class="mt-3 flex items-center">
                    <p class="font-semibold leading-5">View the reference case “Blockchain.com”</p>
                    <div class="w-12 h-12 rounded-full flex justify-center items-center border border-white">
                      <LazyImage width="14" height="14" src="commerce/toollist/white-arrow.svg" />
                    </div>
                  </div>
                  <UiButton class="w-44 mt-3">Gear Up</UiButton>
                </div>
              </div>
            </div>
          </div>
          <div class="tool__image-wrapper h-full relative overflow-hidden">
            <transition name="tool-appear">
              <img
                :key="currentSlide"
                :src="require(`~/assets/images/commerce/toollist/${currentSlide}.png`)"
                class="absolute top-0 left-0 object-cover h-full w-full rounded-l-20"
              />
            </transition>
            <transition name="adv-appear">
              <div
                :key="currentSlide"
                style="transform: rotate(20deg)"
                class="
                  tool__advantage
                  w-32
                  h-32
                  rounded-full
                  bg-yellow-1
                  flex
                  justify-center
                  items-center
                  absolute
                  top-32
                  left-8
                  flex-col
                  text-black
                "
              >
                <p style="font-size: 30px; line-height: 36px" class="font-bold">
                  {{ toolItems[currentSlide - 1].advantage.number }}
                </p>
                <p class="text-xs leading-4 font-semibold">{{ toolItems[currentSlide - 1].advantage.text }}</p>
              </div>
            </transition>
          </div>
        </div>
        <div class="hidden md:block sm:block">
          <div
            v-for="(tool, index) in toolItems"
            :key="tool.title"
            class="overflow-hidden mb-20 duration-1000"
            :class="tool.isOpen ? 'tool_open rounded-t-30' : 'tool_closed  rounded-30'"
          >
            <div class="tool__image relative">
              <LazyImage
                :src="`commerce/toollist/${index + 1}.png`"
                class="w-full h-full object-cover absolute top-0 left-0 rounded-30"
              />
              <div class="flex justify-between items-center relative z-1 px-6 pt-14 sm:pt-8">
                <p class="text-2xl font-bold text-white leading-10">{{ tool.title }}</p>
                <div class="flex items-center gap-2" @click="tool.isOpen = !tool.isOpen">
                  <transition name="open-tool">
                    <p :key="tool.isOpen" class="text-yellow-1 text-xl leading-6 font-medium">
                      {{ tool.isOpen ? 'Hide' : 'Details' }}
                    </p>
                  </transition>
                  <div class="w-8 h-8 rounded-full bg-yellow-1 flex justify-center items-center">
                    <LazyImage
                      :style="{ transform: `rotate(${tool.isOpen ? '0' : '180'}deg)` }"
                      width="14"
                      height="14"
                      src="commerce/toollist/arrow.svg"
                      class="duration-1000"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <p class="font-semibold leading-5">Tools</p>
              <div class="mt-2">
                <p v-for="item in tool.tools" :key="item" class="text-sm leading-6 pl-4">
                  {{ item }}
                </p>
              </div>
              <p class="font-semibold leading-5 mt-1">Results</p>
              <div class="mt-2">
                <p v-for="item in tool.results" :key="item" class="text-sm leading-6 pl-4">
                  {{ item }}
                </p>
              </div>
              <p class="font-semibold leading-5 mt-1">Timeline to Target</p>
              <div class="mt-2">
                <p class="pl-4 tool__item-list">
                  {{ tool.timeline }}
                </p>
              </div>
              <div class="flex items-center mt-2">
                <p class="font-semibold leading-5">View the reference case “Blockchain.com”</p>
                <div class="w-12 h-12 rounded-full border border-white flex justify-center items-center">
                  <LazyImage width="14" height="14" src="commerce/toollist/arrow-right.svg" />
                </div>
              </div>
              <button
                class="
                  rounded-100
                  w-44
                  flex
                  justify-center
                  items-center
                  text-black
                  font-medium
                  text-xl
                  leading-6
                  bg-white
                  mt-4
                  h-12
                "
              >
                Gear Up
              </button>
            </div>
          </div>
        </div>
        <div class="hidden xs:block">
          <div v-for="(tool, index) in toolItems" :key="tool.title" class="mb-4 rounded-30 overflow-hidden">
            <div class="tool__image relative">
              <LazyImage
                :src="`commerce/toollist/${index + 1}.png`"
                class="w-full h-full object-cover absolute top-0 left-0"
              />
              <p style="font-size: 70px" class="text-white font-semibold absolute top-2 left-4">{{ index + 1 }}</p>
              <p class="px-4 absolute left-0 bottom-6 text-2xl leading-10 font-bold">{{ tool.title }}</p>
            </div>
            <div class="py-8 bg-gray-2 px-4">
              <div :class="tool.isOpen ? 'tool_open' : 'tool_closed'" class="overflow-hidden duration-1000">
                <div class="flex items-center mt-2">
                  <p class="font-semibold leading-4 text-xs gap-2">View the reference case “Blockchain.com”</p>
                  <div class="w-12 h-12 rounded-full border border-white flex justify-center items-center">
                    <LazyImage width="14" height="14" src="commerce/toollist/arrow-right.svg" />
                  </div>
                </div>
                <p class="font-semibold leading-5">Tools</p>
                <div class="mt-2">
                  <p v-for="item in tool.tools" :key="item" class="text-sm leading-6 pl-4 tool__bullet">
                    {{ item }}
                  </p>
                </div>
                <p class="font-semibold leading-5 mt-1">Results</p>
                <div class="mt-2">
                  <p v-for="item in tool.results" :key="item" class="text-sm leading-6 pl-4 tool__bullet">
                    {{ item }}
                  </p>
                </div>
                <p class="font-semibold leading-5 mt-1">Timeline to Target</p>
                <div class="mt-2">
                  <p class="pl-4 tool__item-list tool__bullet">
                    {{ tool.timeline }}
                  </p>
                </div>
                <button
                  class="
                    rounded-100
                    w-full
                    flex
                    justify-center
                    items-center
                    text-black
                    font-medium
                    text-xl
                    leading-6
                    bg-white
                    mt-4
                    h-12
                  "
                >
                  Gear Up
                </button>
              </div>
              <div
                class="flex justify-center items-center gap-2 duration-1000"
                @click="tool.isOpen = !tool.isOpen"
                :class="tool.isOpen ? ' mt-6 ' : 'mt-0'"
              >
                <transition name="open-tool">
                  <p :key="tool.isOpen" class="text-white text-xl leading-6 font-medium">
                    {{ tool.isOpen ? 'Hide' : 'Details' }}
                  </p>
                </transition>
                <div class="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                  <LazyImage
                    :style="{ transform: `rotate(${tool.isOpen ? '0' : '180'}deg)` }"
                    width="14"
                    height="14"
                    src="commerce/toollist/arrow.svg"
                    class="duration-1000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import toolItems from '@/utils/toolItems'
import UiButton from '@/components/ui/UiButton.vue'

export default {
  name: 'ToolList',
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
  },
  components: { UiButton },
  data() {
    return {
      toolItems,
      offScroll: false,
      isScrollContainerExist: false,
      touchStartX: 0,
      touchStartY: 0,
      touchEndX: 0,
      touchEndY: 0,
      diffX: 0,
      diffY: 0,
      currentSlide: 1,
      isScrollOccured: false,
    }
  },
  computed: {
    isVisible() {
      return this.currentSection === this.$props.order || this.$props.order === 'default'
    },
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    scrollDirection() {
      return this.$store.state.indexScrollDirection
    },
  },
  watch: {
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', 'black')
    },
  },
  mounted() {
    if (this.$refs.scrollContainer) this.isScrollContainerExist = true

    this.$refs.mainContainer.addEventListener('wheel', (event) => {
      this.isScrollOccured = false
      if (window.innerWidth <= 1199) return
      if (Math.abs(event.wheelDelta) < 50) return
      if (this.$store.state.offScroll | event.ctrlKey) return

      if (event.deltaY > 0) {
        if (this.currentSlide === this.toolItems.length)
          setTimeout(() => {
            if (this.isScrollOccured) return
            this.$store.dispatch('setSection', this.currentSection + 1)
          }, 50)
        else {
          this.$store.commit('setOffScroll', true)
          setTimeout(() => {
            this.$store.commit('setOffScroll', false)
          }, 1000)
          setTimeout(() => {
            if (this.isScrollOccured) return
            this.currentSlide += 1
          }, 50)
        }
      } else {
        if (this.currentSlide === 1)
          setTimeout(() => {
            if (this.isScrollOccured) return
            this.$store.dispatch('setSection', this.currentSection - 1)
          }, 50)
        else {
          this.$store.commit('setOffScroll', true)
          setTimeout(() => {
            this.$store.commit('setOffScroll', false)
          }, 1000)
          setTimeout(() => {
            if (this.isScrollOccured) return
            this.currentSlide = this.currentSlide - 1
          }, 50)
        }
      }
    })

    this.$refs.mainContainer.addEventListener('touchstart', (event) => {
      this.touchStartX = event.changedTouches[0].screenX
      this.touchStartY = event.changedTouches[0].screenY
      this.isScrollOccured = false
    })

    this.$refs.mainContainer.addEventListener('touchend', (event) => {
      if (window.innerWidth > 1199) return
      if (this.isScrollOccured) return
      this.touchEndX = event.changedTouches[0].screenX
      this.touchEndY = event.changedTouches[0].screenY
      this.diffX = Math.abs(this.touchEndX - this.touchStartX)
      this.diffY = Math.abs(this.touchEndY - this.touchStartY)
      if (this.diffY > this.diffX && this.touchEndY - this.touchStartY > 70) {
        this.$store.dispatch('setSection', this.currentSection - 1)
      }
      if (this.diffY > this.diffX && this.touchStartY - this.touchEndY > 70) {
        this.$store.dispatch('setSection', this.currentSection + 1)
      }
    })

    if (this.isScrollContainerExist)
      this.$refs.scrollContainer.addEventListener('scroll', () => {
        this.isScrollOccured = true
      })
  },
}
</script>

<style lang="scss" scoped>
.tool {
  &__bullet {
    padding-left: 10px;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 3px;
      height: 3px;
      background: white;
      border-radius: 50%;
      top: 10px;
      left: 2px;
    }
  }
  &__container {
    @media (min-width: 1200px) {
      min-height: 850px;
    }
  }
  &__image-wrapper {
    width: 661px;
    @media (max-width: 1919px) {
      width: 501px;
    }
  }
  &__slide_1.in-list {
    top: 0;
  }
  &__slide_2.in-list {
    top: 40px;
  }
  &__slide_3.in-list {
    top: 80px;
  }
  &__slide_4.in-list {
    top: 120px;
  }
  &__slide_5.in-list {
    top: 160px;
  }
  &__slide_6.in-list {
    top: 200px;
  }
  &__slide_7.in-list {
    top: 240px;
  }
  &__slide.current {
    top: 30%;
  }
  &__slide.next {
    top: 93%;
    & p {
      opacity: 0;
    }
  }
  &__slide.invisible {
    top: 120%;
  }

  &__item-list {
    position: relative;
    &::before {
      position: absolute;
      content: '';
      top: 10px;
      left: 7px;
      background: white;
      width: 2px;
      height: 2px;
      border-radius: 50%;
    }
  }

  &__image {
    height: 486px;
    @media (max-width: 743px) {
      height: 322px;
    }
  }
  &_open {
    max-height: 1000px;
  }
  &_closed {
    max-height: 150px;
    @media (max-width: 743px) {
      max-height: 0px;
    }
  }
}

.tool-appear {
  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateY(100vh);
  }
}

.tool-down {
  &-enter-active,
  &-leave-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateY(100vh);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
.tool-up {
  &-enter-active,
  &-leave-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateY(-100vh);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.adv-appear {
  &-enter-active,
  &-leave-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateX(70px) !important;
    opacity: 0;
  }
  &-leave-to {
    transform: translateX(-70px) !important;
    opacity: 0;
  }
}

.open-tool {
  &-leave-active,
  &-enter-active {
    transition: all 700ms;
  }
  &-enter {
    opacity: 0;
  }
  &-leave,
  &-leave-active,
  &-leave-to {
    position: absolute;
    opacity: 0 !important;
  }
}
</style>