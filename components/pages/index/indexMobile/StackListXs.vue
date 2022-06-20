<template>
  <div class="pb-14 pt-10 bg-black">
    <div class="px-6 mb-6">
      <p class="text-white font-semibold text-2xl leading-8">Technologies</p>
      <p class="text-white font-medium leading-5">
        Proven track record of using advanced development technology and ML
        models
      </p>
    </div>
    <div
      v-for="group in stack"
      :key="group.title"
      class="px-6 pt-4 pb-6 bg-gray-2 border-b border-black overflow-hidden"
      @click="handleClick(group)"
    >
      <div class="flex justify-between items-center">
        <p
          class="text-xl font-medium leading-6"
          :class="group.isListVisible ? 'text-yellow-1' : 'text-white'"
        >
          {{ group.title }}
        </p>
        <div
          class="w-6 h-6 rounded-full flex justify-center items-center"
          :class="group.isListVisible ? 'bg-yellow-1' : 'bg-white'"
        >
          <LazyImage
            :style="{
              transform: `rotate(${group.isListVisible ? '180' : '0'}deg)`,
            }"
            width="11"
            height="11"
            src="index/stack/arrow-down.svg"
            class="transition-all duration-500"
          />
        </div>
      </div>
      <transition name="stack-xs">
        <div v-if="group.isListVisible" class="mt-4">
          <div
            v-for="tech in group.technologies"
            :key="tech"
            class="flex gap-3 pl-2 items-center"
          >
            <div class="bg-white rounded-full w-0.5 h-0.5"></div>
            <p class="text-white leading-5 mt-1">{{ tech }}</p>
          </div>
        </div>
      </transition>
    </div>
    <div class="mt-10 flex justify-center items-center gap-2">
      <p class="font-semibold leading-5 text-white">
        Calculate the cost of the project
      </p>
      <div
        class="w-8 h-8 rounded-full bg-white flex justify-center items-center"
      >
        <LazyImage width="14" height="14" src="index/stack/arrow-right.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StackListXs',
  data() {
    return {
      stack: [
        {
          title: 'Frontend',
          technologies: [
            'React/Next js',
            'React Material UI',
            'Styled-components и makeStyles from Material UI',
            'TypeScript',
            'ESLint/Prettier',
            'Docker',
          ],
          isListVisible: false,
        },
        {
          title: 'Backend',
          technologies: [
            'PHP',
            'PostgreSQL',
            'Laravel',
            'ElasticSearch',
            'MongoDB',
            'C, C#',
            'Python',
          ],
          isListVisible: false,
        },
        {
          title: 'The server part',
          technologies: [
            'Terraform',
            'GitHub',
            'AWS',
            'Docker в Fargate',
            'C#',
          ],
          isListVisible: false,
        },
        {
          title: 'ML',
          technologies: [
            'Logistic regression',
            'Linear Regression',
            'KNN K Nearest Neighbors',
            'Reference Vector Method (SVMs)',
            'Decision Trees & Random Forests',
            'Clustering',
            'DBSCAN Clustering',
            'Neural Networks',
          ],
          isListVisible: false,
        },
        {
          title: 'DML',
          technologies: [
            'DNN',
            'CAP',
            'VGG-19',
            'Inceptionv3',
            'ResNet50',
            'EfficientNet',
          ],
          isListVisible: false,
        },
        {
          title: 'Biometric / Cyber security',
          technologies: ['Opencv', 'Tensor Flow'],
          isListVisible: false,
        },
        {
          title: 'NFT / AR / VR',
          technologies: ['Unity', 'Vuforia', 'Wikitude', 'Arcore'],
          isListVisible: false,
        },
        {
          title: 'Blockchain & Crypto',
          technologies: [
            'ETH',
            'TRON',
            'BTC',
            'Tezos',
            'NEAR protocol',
            'C-Chain (Avalanche)',
          ],
          isListVisible: false,
        },
      ],
    }
  },
  methods: {
    handleClick(item) {
      const value = !item.isListVisible
      this.stack.forEach((group) => {
        group.isListVisible = false
      })
      item.isListVisible = value
    },
  },
}
</script>

<style lang="scss">
.stack-xs {
  &-leave-active,
  &-enter-active {
    transition: all 350ms linear;
  }
  &-enter,
  &-leave-to {
    max-height: 0px;
  }
  &-enter-to,
  &-leave {
    max-height: 230px;
  }
}
</style>