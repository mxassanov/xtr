<template>
  <img
    data-size="auto"
    :data-src="require(`@/assets/images/${src}`)"
    :width="width ? width + 'px' : ''"
    :height="height ? height + 'px' : ''"
    :alt="alt"
    class="lazyload overflow-hidden"
  />
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>