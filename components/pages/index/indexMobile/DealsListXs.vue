<template>
  <div class="bg-black py-10 text-white">
    <div class="px-6 mb-6">
      <p class="font-semibold text-2xl leading-8">Super Deals</p>
      <p class="mt-2 font-medium leading-5">
        For the company's first year of operation in 2021
      </p>
    </div>
    <div
      v-for="(deal, index) in deals"
      :key="deal.title"
      class="deals-xs__item relative"
    >
      <LazyImage
        :src="`index/deals/${index + 1}-shadow.png`"
        class="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div
        class="h-full px-6 pt-4 pb-6 flex flex-col justify-between relative z-1"
      >
        <div class="w-full">
          <p class="font-semibold text-2xl leading-8">
            {{ '0' + (index + 1) }}
          </p>
          <p class="mt-2 font-bold text-xs leading-4">{{ deal.subtext }}</p>
        </div>
        <div class="w-full">
          <p class="text-2xl leading-8 font-semibold mb-2">{{ deal.title }}</p>
          <div v-for="item in deal.list" :key="item" class="pl-1 gap-2 flex">
            <div
              style="min-width: 4px"
              class="bg-white w-1 h-1 min-w-1 rounded-100 mt-3"
            ></div>
            <p class="deals-xs__list-item mt-1 leading-5">{{ item }}</p>
          </div>
          <button
            class="
              mt-6
              bg-white
              rounded-100
              w-full
              flex
              justify-center
              items-center
              text-black text-xl
              leading-6
              font-medium
              h-12
            "
          >
            Gear Up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DealsListXs',
  data() {
    return {
      deals: [
        {
          title: 'IT audit in a hurry',
          subtext: 'It is completely free (up to 3 days)',
          text: 'We don’t charge for audit to analyse and evaluate business needs as a first step',
          list: [
            'Code quality Optimality of the IT architecture ',
            "The technological stack's usefulness",
            'Processes for development should be as efficient as possible (Lean, Scrum, DevOps) ',
            'Performance and scalability forecasts ',
            'Assessment of risk and vulnerability ',
            'Improvements Recommendations',
          ],
        },
        {
          title: 'Current IT OPEX can be reduced by 25%',
          subtext: 'a minimum of x.2 in the case of digital marketing',
          text: 'Every sportcar aims to optimise its weight. We get rid of excess OPEX costs by reducing them to -25-40%',
          list: [
            'code quality benchmarking (database of ready-made solutions and x.2 code review)',
            'quick advancement (well-developed processes, 100 percent middle and senior level developers) ',
            'IT-architecture best practices (it-architects with international experience) ',
            'There are no additional costs (no administrative employees), a flat structure, and open source management tools.',
          ],
        },
        {
          title:
            'The output of the site in the TOP 10 of the organic output of Google',
          subtext: 'In 2 months, you will receive a guarantee.',
          text: 'We mean it when we say "top outcomes." As a project standard, we will raise your website\'s Google status to the top ranks within two months.',
          list: [
            "XTR's proprietary automatic SEO optimization techniques, which have been tested in a variety of foreign marketplaces, will be implemented: ",
            'Out-of-competition coverage of 100 percent of organic searches is an IT product of semantic core creation. ',
            'The "Performance SEO" methodology is as follows: To reach the top 10 positions, you must be 10 times faster than your competition. ',
            'Methodology of "Native Marketing in SEO"',
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.deals-xs {
  &__item {
    height: 740px;
  }
  &__list-item {
  }
}
</style>