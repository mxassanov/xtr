<template>
  <transition name="prompt">
    <div
      v-if="show"
      class="w-full h-screen z-10 top-0 left-0 transition opacity-0.5 duration-500 text-white fixed overflow-hidden prompt-modal"
      @click="$emit('close')"
    >
      <div
        class="fixed pl-12 pr-24 pt-7 mt-4 mr-0 lg:-mr-1 -mb-0.5 bottom-0 right-0 md:px-16 sm:px-8 xs:px-6 bg-yellow-1 flex-col md:block sm:block xs:block prompt-modal__wrapper"
      >
        <div class="flex justify-between">
          <h5 class="mb-4 font-semibold w-80 text-2xl leading-7 text-black">{{ prompt.subtitle }}</h5>
          <div
            style="min-width: 32px"
            class="bg-black w-8 h-8 rounded-full flex justify-center items-center"
          >
            <LazyImage width="16" height="16" src="services-solutions/services/close.svg" />
          </div>
        </div>
        <p style="max-width: 509px" class="text-base text-black">{{ prompt.subtext }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PromptModal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    prompt: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.prompt {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
.prompt-modal {
  &__wrapper {
    width: 822px;
    height: 470px;
    border-top-left-radius: 20px;
    
    @media (max-width: 1025px) {
        border-radius: 0;
        width: 100vw;
        height: 50%;
    }
    @media (max-width: 745px) {
        height: 60%;
    }
    @media (max-width: 376px) {
        height: 70%;
    }
  }
}
</style>
