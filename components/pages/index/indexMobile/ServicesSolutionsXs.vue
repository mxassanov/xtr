<template>
  <div class="services-xs bg-black pt-10 pb-10">
    <div class="px-6 mb-6">
      <p class="text-white text-2xl leading-8 font-semibold">Services</p>
      <p class="text-white leading-5 font-medium mt-2">
        Proven experience in using advanced development technologies and
        artificial intelligence models
      </p>
    </div>
    <div
      v-for="(service, index) in services"
      :key="service.title"
      class="services-xs__item flex flex-col justify-between relative"
    >
      <LazyImage
        :src="`index/solutions/${index + 1}.png`"
        class="object-cover w-full h-full object-top absolute top-0 left-0"
      />
      <div class="flex mt-4 px-6 justify-between items-center relative z-1">
        <p class="text-white text-2xl leading-8 font-semibold">
          {{ '0' + (index + 1) }}
        </p>
        <div
          class="rounded-full bg-white flex justify-center items-center w-8 h-8"
        >
          <LazyImage
            width="14"
            height="14"
            src="index/solutions/solution-arrow.svg"
          />
        </div>
      </div>
      <div class="px-6 relative z-1 pb-6">
        <p class="text-white font-semibold text-2xl leading-8 mb-2">
          {{ service.title }}
        </p>
        <p
          v-for="item in service.list"
          :key="item"
          class="text-white leading-5 mt-1"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesSolutionsXs',
  data() {
    return {
      services: [
        {
          title: 'Strategy and design',
          list: [
            'Strategy',
            'Corporate identity design',
            'Creative Web Design',
            'Graphic Design & CGI',
            'Content Development',
            'Creative Interface',
          ],
        },
        {
          title: 'IT product development',
          list: [
            'Product Strategy',
            'UX and UI design',
            'Frontend development',
            'Backend development',
            'Quality assurance',
            'Help Desk',
          ],
        },
        {
          title: 'Performance marketing',
          list: [
            'Analytics',
            'Display advertising',
            'Targeted advertising',
            'Media advertising',
            'SEO',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.services-xs {
  &__item {
    height: 461px;
  }
}
</style>