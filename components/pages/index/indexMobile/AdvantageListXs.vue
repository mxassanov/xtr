<template>
  <div class="py-10 bg-black">
    <div class="px-6">
      <p class="text-white mt-10 font-semibold text-2xl leading-8">
        Figures of importance
      </p>
      <p class="mt-2 font-medium leading-5 text-white">
        For the company's first year of operation in 2021
      </p>
    </div>
    <div
      v-for="advantage in advantages"
      :key="advantage.text"
      class="pb-4 border-b border-gray-5 mt-6"
    >
      <div class="px-6 flex items-center justify-between">
        <p class="text-white text-3xl leading-10 font-bold">
          {{ advantage.number }}
        </p>
        <div
          class="
            w-6
            h-6
            bg-yellow-1
            rounded-full
            flex
            justify-center
            items-center
          "
        >
          <LazyImage
            width="11"
            height="11"
            src="index/advantages/arrow-xs.svg"
          />
        </div>
      </div>
      <p class="px-6 mt-1 text-white text-sm leading-4">{{ advantage.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvantageList',

  data() {
    return {
      advantages: [
        {
          number: '70',
          text: 'middle and senior level developers with 3+ years of experience',
        },
        {
          number: '+150%',
          text: "Forecast for the growth of the company's staff in 2022",
        },
        {
          number: '100%',
          text: 'NPS of customers by completed projects in 2021',
        },
        {
          number: '>200',
          text: 'projects implemented by the company and team members in 2015-2021',
        },
        {
          number: '92%',
          text: 'contract sales conversion to large corporations in 2021',
        },
        {
          number: '+400%',
          text: 'Revenue Growth Forecast in 2022',
        },
      ],
    }
  },
}
</script>