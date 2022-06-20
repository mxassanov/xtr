<template>
  <div
    class="
      rounded-100
      bg-white
      flex
      justify-center
      items-center
      text-black text-xl
      leading-5
      font-medium
      transition-transform
      duration-1000
      relative
      overflow-hidden
      ui-button__wrapper
    "
    :class="heightClass"
  >
    <span class="relative z-1"><slot /></span>
    <div class="absolute top-0 left-0 h-full w-full bg-yellow-1 transition-transform duration-500 rounded-100"></div>
  </div>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    buttonHeight: {
      type: String,
      default: 'md',
    },
  },
  computed: {
    heightClass() {
      if (this.$props.buttonHeight === 'sm') return 'h-10'
      if (this.$props.buttonHeight === 'lg') return 'h-14'
      return 'h-12'
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-button {
  &__wrapper {
    &:hover {
      & > div {
        transform: translateX(0);
      }
    }
    &:active {
      & > div {
        background-color: #e2da15 !important;
      }
    }
    & > div {
      transform: translateX(-105%);
    }
  }
}
</style>