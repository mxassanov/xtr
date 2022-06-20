<template>
  <div class="header-xs relative px-6 pb-28 bg-black">
    <LazyImage
      width="1427"
      height="1080"
      src="index/header/header-bg.png"
      class="header-xs__bg-image absolute"
    />
    <div class="relative z-1">
      <p class="text-yellow-1 font-medium text-sm leading-6">
        / Design & custom software development
      </p>
      <h1 class="header-xs__title mt-2 text-white font-medium">
        DAO Culture. Startup Speed. Magic Rates.
      </h1>
      <p
        style="letter-spacing: -0.02em"
        class="mt-10 leading-5 text-white font-medium"
      >
        We <span class="text-yellow-1 font-bold">x-multiply</span> and
        <span class="text-yellow-1 font-bold">x-scale</span> businesses via
        high-tech ideas and custom it-solutions at → startup speed.
      </p>
      <div class="flex flex-wrap mt-4 gap-1">
        <div
          v-for="tag in tags"
          :key="tag"
          class="
            header-xs__tag
            rounded-100
            text-white
            font-bold
            text-sm
            leading-4
            py-1.5
            px-3
          "
        >
          {{ tag }}
        </div>
      </div>
      <button
        class="
          bg-white
          w-full
          h-12
          rounded-100
          mt-28
          text-xl
          leading-6
          font-medium
        "
      >Request</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderXs',
  data() {
    return {
      tags: [
        'App & Web',
        'CRM, ERP, MDM, BPMS',
        'AR/VR',
        'Machine Learning',
        'BPMS',
        'RPA',
        'NFT',
        'DeFi',
        'Blockchain',
        'Metaverse',
        'Biometrics',
      ],
    }
  },
}
</script>

<style lang="scss">
.header-xs {
  padding-top: 154px;
  &__title {
    font-size: 44px;
    line-height: 50px;
  }
  &__bg-image {
    max-width: unset;
    top: -250px;
    left: -375px;
  }
  &__tag {
    background: rgba(220, 220, 220, 0.3);
  }
}
</style>