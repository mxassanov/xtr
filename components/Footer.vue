<template>
  <div class="mt-20 sm:mt-16 sm:mt-6 xs:mt-12 footer pb-20 sm:pb-6">
    <div class="flex justify-between md:hidden sm:hidden xs:hidden">
      <div class="grid grid-cols-2 gap-32">
        <div>
          <nuxt-link to="/"><LazyImage width="80" src="footer/logotype.png" /></nuxt-link>
          <nuxt-link to="/cases" class="font-semibold leading-5 text-white block mt-8 hover:text-yellow-1"
            >Cases</nuxt-link
          >
          <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Processes</p>
          <nuxt-link to="/services-solutions" class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1"
            >Services & Solutions
          </nuxt-link>
          <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Super Deals</p>
        </div>
        <div>
          <div class="flex items-center gap-4 mt-2">
            <p class="text-yellow-1 font-semibold leading-5 hover:text-yellow-1">En</p>
            <p class="text-white font-semibold leading-5 hover:text-yellow-1">Es</p>
          </div>
          <p class="font-semibold leading-5 text-white mt-14 hover:text-yellow-1">Technologies</p>
          <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Career</p>
          <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Mission</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <p class="text-white leading-5">US: <span class="font-semibold">+1 607-260-1070</span></p>
        <p class="text-white leading-5 mt-2">Panama: <span class="font-semibold">+507 6367 7153</span></p>
        <p class="text-white leading-5 font-semibold mt-2">hello@x-t-r.com</p>
        <div class="flex gap-8 items-center justify-center mt-10">
          <LazyImage v-for="social in socials" :key="social" width="24" :src="`footer/${social}.svg`" />
        </div>
        <p class="mt-4 text-gray-2 text-sm leading-4">© XTR Solution Inc. 2022</p>
      </div>
      <div class="">
        <p class="font-semibold leading-5 text-white text-right">US</p>
        <p class="mt-2 text-xs leading-4 text-right">
          Wyoming 82801<br />
          30 N Gould St Ste R Sheridan
        </p>
        <p class="mt-2 text-xs leading-4 text-right">
          NY 11235<br />
          3057 Brighton 4th St, Brooklyn
        </p>
        <p class="mt-6 font-semibold leading-5 text-white text-right">Panama</p>
        <p class="mt-2 text-xs leading-4 text-right">
          Calidonia, calle 39 y calle 40, PH Yacht Club Tower<br />
          Panama City, Panama 8101
        </p>
      </div>
    </div>
    <div class="justify-between hidden md:flex">
      <div>
        <div class="flex gap-16">
          <div>
            <nuxt-link to="/"><LazyImage width="80" src="footer/logotype.png" /></nuxt-link>
            <div class="flex items-center gap-4 mt-8">
              <p class="text-yellow-1 font-semibold leading-5 hover:text-yellow-1">En</p>
              <p class="text-white font-semibold leading-5 hover:text-yellow-1">Es</p>
            </div>
          </div>
          <div class="flex gap-16">
            <div>
              <nuxt-link to="/cases" class="font-semibold leading-5 text-white block hover:text-yellow-1"
                >Cases</nuxt-link
              >
              <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Processes</p>
              <nuxt-link to="/services-solutions" class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1"
                >Services & Solutions
              </nuxt-link>
              <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Super Deals</p>
            </div>
            <div>
              <p class="font-semibold leading-5 text-white hover:text-yellow-1">Technologies</p>
              <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Career</p>
              <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Mission</p>
            </div>
          </div>
        </div>
        <div class="flex w-full mt-8 justify-between items-end">
          <div class="flex flex-col items-start justify-center">
            <p class="text-white leading-5">US: <span class="font-semibold">+1 607-260-1070</span></p>
            <p class="text-white leading-5 mt-2">Panama: <span class="font-semibold">+507 6367 7153</span></p>
            <p class="text-white leading-5 font-semibold mt-2">hello@x-t-r.com</p>
          </div>
          <div class="flex gap-8 items-center justify-center mt-10">
            <LazyImage v-for="social in socials" :key="social" width="24" :src="`footer/${social}.svg`" />
          </div>
        </div>
      </div>
      <div>
        <p class="font-semibold leading-5 text-white text-right">US</p>
        <p class="mt-2 text-xs leading-4 text-right">
          Wyoming 82801<br />
          30 N Gould St Ste R Sheridan
        </p>
        <p class="mt-2 text-xs leading-4 text-right">
          NY 11235<br />
          3057 Brighton 4th St, Brooklyn
        </p>
        <p class="mt-6 font-semibold leading-5 text-white text-right">Panama</p>
        <p class="mt-2 text-xs leading-4 text-right">
          Calidonia, calle 39 y calle 40, PH Yacht Club Tower<br />
          Panama City, Panama 8101
        </p>
        <p class="mt-4 text-gray-2 text-sm leading-4 text-right">© XTR Solution Inc. 2022</p>
      </div>
    </div>
    <div class="hidden sm:block">
      <div class="flex justify-between">
        <div class="flex gap-16">
          <div>
            <nuxt-link to="/cases" class="font-semibold leading-5 text-white block hover:text-yellow-1"
              >Cases</nuxt-link
            >
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Processes</p>
            <nuxt-link to="/services-solutions" class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1"
              >Services & Solutions
            </nuxt-link>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Super Deals</p>
          </div>
          <div>
            <p class="font-semibold leading-5 text-white hover:text-yellow-1">Technologies</p>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Career</p>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Mission</p>
          </div>
        </div>
        <div>
          <nuxt-link to="/"> <LazyImage width="80" src="footer/logotype.png" /></nuxt-link>
          <div class="flex items-center gap-4 mt-8">
            <p class="text-yellow-1 font-semibold leading-5 hover:text-yellow-1">En</p>
            <p class="text-white font-semibold leading-5 hover:text-yellow-1">Es</p>
          </div>
        </div>
      </div>
      <div class="mt-10 pt-6 flex justify-between">
        <div class="">
          <p class="font-semibold leading-5 text-white">US</p>
          <p class="mt-2 text-xs leading-4">
            Wyoming 82801<br />
            30 N Gould St Ste R Sheridan
          </p>
          <p class="mt-2 text-xs leading-4">
            NY 11235<br />
            3057 Brighton 4th St, Brooklyn
          </p>
          <p class="mt-6 font-semibold leading-5 text-white">Panama</p>
          <p class="mt-2 text-xs leading-4">
            Calidonia, calle 39 y calle 40, PH Yacht Club Tower<br />
            Panama City, Panama 8101
          </p>
          <p class="mt-4 text-gray-2 text-sm leading-4">© XTR Solution Inc. 2022</p>
        </div>

        <div class="flex flex-col mt-8 justify-between items-end">
          <div class="flex flex-col items-end justify-center">
            <p class="text-white leading-5 text-right">US: <span class="font-semibold">+1 607-260-1070</span></p>
            <p class="text-white leading-5 mt-2 text-right">
              Panama: <span class="font-semibold">+507 6367 7153</span>
            </p>
            <p class="text-white leading-5 font-semibold mt-2 text-right">hello@x-t-r.com</p>
          </div>
          <div class="flex gap-8 items-center justify-center mt-10">
            <LazyImage v-for="social in socials" :key="social" width="24" :src="`footer/${social}.svg`" />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden xs:block">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div>
            <nuxt-link to="/cases" class="font-semibold leading-5 text-white block hover:text-yellow-1"
              >Cases</nuxt-link
            >
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Processes</p>
            <nuxt-link
              to="/services-solutions"
              class="font-semibold leading-5 block text-white mt-1.5 hover:text-yellow-1"
              >Services & Solutions
            </nuxt-link>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Super Deals</p>
          </div>
          <div>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Technologies</p>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Career</p>
            <p class="font-semibold leading-5 text-white mt-1.5 hover:text-yellow-1">Mission</p>
          </div>
        </div>
        <div>
          <nuxt-link to="/"><LazyImage width="80" src="footer/logotype.png" /></nuxt-link>
          <div class="flex justify-end items-center gap-4 mt-8">
            <p class="text-yellow-1 font-semibold leading-5 hover:text-yellow-1">En</p>
            <p class="text-white font-semibold leading-5 hover:text-yellow-1">Es</p>
          </div>
        </div>
      </div>
      <div class="mt-12">
        <p class="text-white leading-5 text-center">US: <span class="font-semibold">+1 607-260-1070</span></p>
        <p class="text-white leading-5 mt-2 text-center">Panama: <span class="font-semibold">+507 6367 7153</span></p>
        <p class="text-white leading-5 font-semibold mt-2 text-center">hello@x-t-r.com</p>
        <div class="flex gap-8 items-center justify-center mt-10">
          <LazyImage v-for="social in socials" :key="social" width="24" :src="`footer/${social}.svg`" />
        </div>
        <p class="font-semibold leading-5 text-white text-center mt-6">US</p>
        <p class="mt-2 text-xs leading-4 text-center">
          Wyoming 82801<br />
          30 N Gould St Ste R Sheridan
        </p>
        <p class="mt-2 text-xs leading-4 text-center">
          NY 11235<br />
          3057 Brighton 4th St, Brooklyn
        </p>
        <p class="mt-6 font-semibold leading-5 text-white text-center">Panama</p>
        <p class="mt-2 text-xs leading-4 text-center">
          Calidonia, calle 39 y calle 40, PH Yacht Club Tower<br />
          Panama City, Panama 8101
        </p>
        <p class="mt-4 text-gray-2 text-sm leading-4 text-center">© XTR Solution Inc. 2022</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socials: ['twitter', 'instagram', 'telegram'],
    }
  },
  methods: {
    handleSectionClick(section) {
      this.$store.dispatch('setSection', section)
    },
  },
}
</script>

<style lang="scss">
.footer {
}
</style>