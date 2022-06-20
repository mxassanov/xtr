<template>
  <div class="process-xs bg-black py-10 text-white">
    <div class="px-6 mb-14">
      <p class="text-2xl leading-8 font-semibold">Processes</p>
      <p class="mt-2 leading-5 font-medium">
        Speed and quality are achieved by unique design and development processes for it solutions. Automated project
        management system gives the customer access to real-time reporting of all project details
      </p>
    </div>
    <client-only>
      <swiper
        :options="options"
        :class="`bg-process-bg-${currentSlide + 1}`"
        @slideChange="handleSlideChange"
        class="duration-1000"
      >
        <swiper-slide v-for="(process, index) in processes" :key="process.title" class="pb-8">
          <div class="process-xs__image-wrapper rounded-15 overflow-hidden relative p-2">
            <p style="font-size: 70px; line-height: 85px" class="font-semibold absolute top-0 left-6">
              {{ index + 1 }}
            </p>
            <LazyImage
              :src="`index/processes/${index + 1}.png`"
              class="w-full h-full object-cover object-center rounded-15"
            />
          </div>
          <div class="px-6">
            <p class="mt-2 font-medium leading-5">
              {{ process.date }}
            </p>
            <p class="font-semibold text-2xl leading-8 mt-2">
              {{ process.title }}
            </p>
            <div
              :style="{
                'max-height': `${process.isDescriptionVisible ? '130' : '0'}px`,
              }"
              :class="{ 'opacity-0': !process.isDescriptionVisible }"
              class="overflow-hidden duration-500"
            >
              <p class="mt-2 leading-5">
                {{ process.text }}
              </p>
            </div>
            <div class="flex gap-2 items-center mt-4" @click="handleClick(process)">
              <transition name="process-xs-text">
                <p :key="process.isDescriptionVisible" class="font-semibold leading-5">
                  {{ process.isDescriptionVisible ? 'Hide' : 'Details' }}
                </p>
              </transition>
              <div class="w-6 h-6 bg-white rounded-full flex justify-center items-center">
                <LazyImage
                  :style="{
                    transform: `rotate(${process.isDescriptionVisible ? '180' : '0'}deg)`,
                  }"
                  width="11"
                  height="11"
                  src="index/processes/arrow-xs.svg"
                  class="transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ProcessesListXs',
  data() {
    return {
      options: {
        slidesPerView: 1.05,
      },
      currentSlide: 0,
      processes: [
        {
          date: '3 days',
          title: 'Preliminary assessment and start of work',
          text: 'The XTR team makes a preliminary cost estimate and road map for the launch. Result: Road Map, contract, project evaluation',
          advantage: {
            number: '3 days',
            text: 'or evaluation and road map',
          },
          isDescriptionVisible: false,
        },
        {
          date: '7 days',
          title: 'Team gathering',
          text: 'We connect systems analysts and it-architects with specialized experience to develop a prospective architecture and detailed TOR. Before launching the project, we present and interview the team with the customer',
          advantage: {
            number: '100%',
            text: 'teams with specialized experience',
          },
          isDescriptionVisible: false,
        },
        {
          date: '1-3 weeks',
          title: 'Design and engineering',
          text: 'We lay the groundwork for your IT project, including plans and risks. The result: Vision Scope, User Story Map, Design Concept, Architecture Diagram and Vision Document, detailed budget and project roadmap.',
          advantage: {
            number: '100%',
            text: 'technical documentation at startup speed',
          },
          isDescriptionVisible: false,
        },
        {
          date: '2 weeks for 1 sprint',
          title: 'Development',
          text: 'The process is based on Scrum and is iterative to ensure targeted results: Each feedback-based sprint lasts 2 weeks Synchronization and reporting takes place on a weekly basis Real-time progress reporting',
          advantage: {
            number: '0-5%',
            text: 'improvements due to 2 code reviews',
          },
          isDescriptionVisible: false,
        },
        {
          date: '7 days',
          title: 'Testing',
          text: 'Internal and combat testing. Debugging the it-solution',
          advantage: {
            number: '100%',
            text: 'test coverage of the entire IT solution',
          },
          isDescriptionVisible: false,
        },
        {
          date: '3,5 month',
          title: 'Release and training',
          text: 'The XTR team performs the release and delivers the project to the customer: including the code base, business and technical documentation, training manuals, and user manuals. Workshops are held to support the process',
          advantage: {
            number: '3 months',
            text: 'to release the first version of a complex IT startup',
          },
          isDescriptionVisible: false,
        },
        {
          date: '',
          title: 'Ongoing support and development',
          text: 'During this post-transfer phase, the XTR team maintains close contact with the customer to ensure proper operation, provide expert support and troubleshoot unforeseen problems, with an emphasis on continuous development.',
          advantage: {
            number: '30-40%',
            text: 'cheaper development due to unique processes',
          },
          isDescriptionVisible: false,
        },
      ],
    }
  },
  methods: {
    handleClick(process) {
      process.isDescriptionVisible = !process.isDescriptionVisible
    },
    handleSlideChange(swiper) {
      this.currentSlide = swiper.activeIndex
    },
  },
}
</script>

<style lang="scss">
.process-xs {
  &__image-wrapper {
    height: 260px;
  }
  &-text {
    &-leave-active,
    &-enter-active {
      transition: all 1000ms;
    }
    &-enter,
    &-leave {
      opacity: 0;
    }
    &-leave,
    &-leave-active {
      position: absolute;
    }
  }
}
</style>