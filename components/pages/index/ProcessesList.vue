<template>
  <transition :name="scrollDirection === 'down' ? 'processes-down' : 'processes-up'">
    <div ref="mainContainer" v-show="isVisible" class="processes advantages w-full h-screen absolute top-0 left-0">
      <div class="w-full h-full pt-32 pl-24 md:px-16 sm:px-8 flex flex-col text-white">
        <div class="grid grid-cols-3 lg:pr-24 xl:pr-24 sm:flex sm:justify-between w-full processes__top-text">
          <p class="text-3xl text-white flex-1 font-bold leading-10">Processes</p>
          <p class="text-white leading-5 processes__subtitle col-span-2">
            Speed and quality are achieved by unique design and development processes for it solutions. Automated
            project management system gives the customer access to real-time reporting of all project details
          </p>
        </div>
        <div class="processes__info-wrapper mt-6 flex-col gap-6 processes__main-block">
          <div class="processes__image-wrapper md:w-full sm:w-full relative">
            <img
              v-for="imageIndex in processes.length"
              :key="imageIndex"
              :src="require(`~/assets/images/index/processes/${imageIndex}.png`)"
              class="w-full h-full object-cover absolute top-0 left-0 rounded-30"
              :class="imageIndex === currentSlideXs ? 'z-2' : 'opacity-0 '"
            />
            <div
              class="processes__advantage rounded-full absolute z-9 flex justify-center items-center flex-col"
              :class="`bg-process-adv-${currentSlideXs}`"
            >
              <p class="font-medium text-3xl leading-10 text-center">
                {{ processes[currentSlideXs - 1].advantage.number }}
              </p>
              <p
                style="font-size: 10px"
                class="font-medium leading-5 text-center"
                v-html="processes[currentSlideXs - 1].advantage.text"
              ></p>
            </div>
          </div>
          <div
            ref="scrollContainer"
            class="flex-1 processes__list-wrapper overflow-scroll flex flex-col gap-2 md:gap-4"
          >
            <div
              v-for="(process, index) in processes"
              :key="process.title"
              class="w-full p-4 rounded-8 duration-700"
              :class="process.isTextVisible ? `bg-process-bg-${index + 1}` : ' bg-gray-2'"
            >
              <div class="flex justify-between items-center">
                <div>
                  <p class="leading-5 font-medium sm:text-sm sm:leading-4">{{ process.date }}</p>
                  <p class="text-xl leading-6 font-semibold sm:text-base sm:leading-5">{{ process.title }}</p>
                </div>
                <div class="flex gap-2 items-center" @click="handleDetailsClick(process, index)">
                  <p class="text-yellow-1 font-semibold leading-5">{{ process.isTextVisible ? 'Hide' : 'Details' }}</p>
                  <div class="flex justify-center items-center rounded-full bg-yellow-1 w-8 h-8">
                    <LazyImage
                      :style="{ transform: `rotate(${process.isTextVisible ? '180' : '0'}deg)` }"
                      width="14"
                      height="14"
                      src="index/processes/arrow-yellow.svg"
                      class="duration-700"
                    />
                  </div>
                </div>
              </div>
              <div
                :style="{ 'max-height': `${process.isTextVisible ? '110' : '0'}px` }"
                class="mt-2 text-sm leading-4 md:text-xl md:leading-6 overflow-hidden duration-700"
              >
                {{ process.text }}
              </div>
            </div>
          </div>
        </div>
        <div class="processes__slide-wrapper flex-1 mt-14 lg:mt-8 hidden processes__main-block">
          <div class="flex-1 flex gap-4">
            <div class="h-full w-8">
              <div
                :style="{ 'max-height': `${currentSlide === processes.length ? '72' : '100'}%` }"
                class="w-px h-full mx-auto bg-white duration-1000"
              ></div>
            </div>
            <div class="flex-1 relative">
              <div
                v-for="(process, index) in processes"
                :key="process.title"
                class="w-full absolute left-0 processes__slide duration-1000"
                :class="[
                  `processes__slide_${index + 1}`,
                  {
                    'in-list': index + 1 < currentSlide,
                    current: index + 1 === currentSlide,
                    next: index === currentSlide,
                    invisible: index > currentSlide,
                  },
                ]"
              >
                <p class="leading-5 font-medium xl:text-xl xl:leading-6 processes__slide-date duration-1000">
                  {{ process.date }}
                </p>
                <p class="text-xl leading-6 font-semibold processes__slide-title duration-1000">{{ process.title }}</p>
                <p class="mt-2 text-xl leading-6 processes__slide-text duration-1000">{{ process.text }}</p>
                <div
                  v-if="index + 1 !== processes.length"
                  style="left: -37px"
                  class="absolute rounded-full bg-white w-2.5 h-2.5 top-0 processes__slide-point duration-1000"
                ></div>
                <div
                  v-else
                  style="left: -48px"
                  class="absolute rounded-full w-8 h-4 top-3 processes__slide-point duration-1000"
                >
                  <LazyImage width="32" height="16" src="index/processes/infinity.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="processes__image-wrapper relative">
            <transition-group tag="div" name="processes-images" class="absolute top-0 left-0 w-full h-full">
              <img
                v-for="imageIndex in processes.length"
                :key="imageIndex + `${currentSlide}`"
                :src="require(`~/assets/images/index/processes/${imageIndex}.png`)"
                class="w-full h-full object-cover absolute top-0 left-0 rounded-l-45"
                :class="imageIndex === currentSlide ? 'z-2' : 'opacity-0 '"
              />
            </transition-group>
            <transition name="processes-advantage">
              <div
                :key="currentSlide"
                class="processes__advantage rounded-full absolute z-9 flex justify-center items-center flex-col"
                :class="`bg-process-adv-${currentSlide}`"
              >
                <p class="font-medium text-3xl leading-10 text-center">
                  {{ processes[currentSlide - 1].advantage.number }}
                </p>
                <p
                  style="font-size: 10px"
                  class="font-medium leading-5 text-center"
                  v-html="processes[currentSlide - 1].advantage.text"
                ></p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProcessesList',
  props: {
    order: {
      type: [String, Number],
      default: '',
    },
  },
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
      currentSlide: 1,
      currentSlideXs: 1,
      processes: [
        {
          date: '3 days',
          title: 'Preliminary assessment and start of work',
          text: 'The XTR team makes a preliminary cost estimate and road map for the launch. Result: Road Map, contract, project evaluation',
          advantage: {
            number: '3 days',
            text: 'or evaluation and road map',
          },
          isTextVisible: false,
        },
        {
          date: '7 days',
          title: 'Team gathering',
          text: 'We connect systems analysts and it-architects with specialized experience to develop a prospective architecture and detailed TOR. Before launching the project, we present and interview the team with the customer',
          advantage: {
            number: '100%',
            text: 'teams with specialized <br /> experience',
          },
          isTextVisible: false,
        },
        {
          date: '1-3 weeks',
          title: 'Design and engineering',
          text: 'We lay the groundwork for your IT project, including plans and risks. The result: Vision Scope, User Story Map, Design Concept, Architecture Diagram and Vision Document, detailed budget and project roadmap.',
          advantage: {
            number: '100%',
            text: 'technical documentation<br /> at startup speed',
          },
          isTextVisible: false,
        },
        {
          date: '2 weeks for 1 sprint',
          title: 'Development',
          text: 'The process is based on Scrum and is iterative to ensure targeted results: Each feedback-based sprint lasts 2 weeks Synchronization and reporting takes place on a weekly basis Real-time progress reporting',
          advantage: {
            number: '0-5%',
            text: 'improvements due<br /> to 2 code reviews',
          },
          isTextVisible: false,
        },
        {
          date: '7 days',
          title: 'Testing',
          text: 'Internal and combat testing. Debugging the it-solution',
          advantage: {
            number: '100%',
            text: 'test coverage <br /> of the entire IT solution',
          },
          isTextVisible: false,
        },
        {
          date: '3,5 month',
          title: 'Release and training',
          text: 'The XTR team performs the release and delivers the project to the customer: including the code base, business and technical documentation, training manuals, and user manuals. Workshops are held to support the process',
          advantage: {
            number: '3 months',
            text: 'to release the first version of a complex IT startup',
          },
          isTextVisible: false,
        },
        {
          date: '',
          title: 'Ongoing support and development',
          text: 'During this post-transfer phase, the XTR team maintains close contact with the customer to ensure proper operation, provide expert support and troubleshoot unforeseen problems, with an emphasis on continuous development.',
          advantage: {
            number: '30-40%',
            text: 'cheaper development due to unique processes',
          },
          isTextVisible: false,
        },
      ],
    }
  },
  methods: {
    changeBgColor(value) {
      switch (value) {
        case 1:
          this.$store.commit('changeBgColor', '#FD815C')
          return
        case 2:
          this.$store.commit('changeBgColor', '#465281')
          return
        case 3:
          this.$store.commit('changeBgColor', '#2E0879')
          break
        case 4:
          this.$store.commit('changeBgColor', '#CFBC62')
          break
        case 5:
          this.$store.commit('changeBgColor', '#FD815C')
          break
        case 6:
          this.$store.commit('changeBgColor', '#FE4A4F')
          break
        case 7:
          this.$store.commit('changeBgColor', '#9C0EA8')
          break
      }
    },
    handleDetailsClick(process, index) {
      const value = !process.isTextVisible
      if (value) this.currentSlideXs = index + 1
      this.processes.forEach((item) => {
        item.isTextVisible = false
      })
      process.isTextVisible = value
    },
  },
  watch: {
    isVisible(value) {
      if (!value) return
      if (window.innerWidth > 1199) this.changeBgColor(this.currentSlide)
      else this.$store.commit('changeBgColor', 'black')
    },
    currentSlide(value) {
      this.changeBgColor(value)
    },
  },
  computed: {
    isVisible() {
      return this.currentSection === this.$props.order
    },
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    scrollDirection() {
      return this.$store.state.indexScrollDirection
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
        if (this.currentSlide === this.processes.length)
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

    window.addEventListener('resize', () => {
      if (this.currentSection !== this.$props.order) return
      if (window.innerWidth < 1200) this.$store.commit('changeBgColor', 'black')
      else this.changeBgColor(this.currentSlide)
    })
  },
}
</script>

<style lang="scss">
.processes {
  &__top-text {
  }
  &__image-wrapper {
    width: 515px;
    @media (max-width: 1919px) {
      width: 395px;
    }
    height: 92%;
    @media (max-width: 1199px) {
      height: 314px;
    }
    @media (max-width: 1023px) {
      height: 220px;
    }
  }

  &__subtitle {
    width: 555px;
  }

  &__slide-wrapper {
    gap: 348px;
    @media (max-width: 1919px) {
      gap: 78px;
    }
    @media (min-width: 1199px) {
      display: flex !important;
    }
  }

  &__slide_1.in-list {
    top: 0;
    @media (max-width: 1919px) {
      top: 0;
    }
  }
  &__slide_2.in-list {
    top: 77px;
    @media (max-width: 1919px) {
      top: 60px;
    }
  }
  &__slide_3.in-list {
    top: 154px;
    @media (max-width: 1919px) {
      top: 120px;
    }
  }
  &__slide_4.in-list {
    top: 231px;
    @media (max-width: 1919px) {
      top: 180px;
    }
  }
  &__slide_5.in-list {
    top: 308px;
    @media (max-width: 1919px) {
      top: 240px;
    }
  }
  &__slide_6.in-list {
    top: 385px;
    @media (max-width: 1919px) {
      top: 300px;
    }
  }
  &__slide_7.in-list {
    top: 462px;
    @media (max-width: 1919px) {
      top: 360px;
    }
  }
  &__slide.in-list {
    .processes__slide-text {
      opacity: 0;
    }
  }

  &__slide.current {
    top: 70%;
    .processes__slide-point {
      transform: scale(1.5);
    }
    .processes__slide-date {
      font-weight: 600 !important;
    }
    .processes__slide-title {
      font-size: 32px !important;
      line-height: 39px !important;
    }
  }
  &__slide.next {
    top: 90%;
    & > p {
      opacity: 20%;
    }
    .processes__slide-date {
      font-weight: 600 !important;
    }
    .processes__slide-title {
      font-size: 32px !important;
      line-height: 39px !important;
    }
  }
  &__slide.invisible {
    top: 120%;
  }

  &__advantage {
    width: 192px;
    min-width: 192px;
    height: 192px;
    bottom: -40px;
    left: -215px;
    @media (max-width: 1919px) {
      bottom: 115px;
      left: -60px;
    }
    @media (max-width: 1199px) {
      bottom: 0;
      left: -56px;
    }
    @media (max-width: 1023px) {
      bottom: 66px;
      left: -28px;
    }
  }
  &__info-wrapper {
    display: none;
    @media (max-width: 1199px) {
      display: flex;
    }
  }
  &__list-wrapper {
    max-height: 780px;
    @media (max-width: 1023px) {
      max-height: 500px;
    }
  }
}

.processes-down {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
  }
  &-enter {
    .processes__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .processes__main-block {
      transform: translateY(100vh);
    }
  }
  &-leave-to {
    .processes__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .processes__main-block {
      transform: translateY(-100vh);
    }
  }
}
.processes-up {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
  }
  &-enter {
    .processes__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .processes__main-block {
      transform: translateY(-100vh) !important;
    }
  }
  &-leave-to {
    .processes__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .processes__main-block {
      transform: translateY(100vh);
    }
  }
}

.processes-images {
  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateX(520px);
  }
  &-leave,
  &-leave-active {
    opacity: 100% !important;
  }
}

.processes-advantage {
  &-leave-active,
  &-enter-active {
    transition: all 1000ms;
  }
  &-enter {
    transform: translateY(100px);
    opacity: 0;
  }
  &-leave-to {
    transform: translateY(-100px);
    opacity: 0;
  }
}
</style>