<template>
  <div
    id="menuModal"
    class="fixed origin-top top-0 left-0 w-full h-screen z-10 bg-black menu-modal menu-modal-not-main text-white overflow-hidden"
  >
    <div
      class="w-full h-full md:px-16 sm:px-8 xs:px-6 flex items-center justify-center menu-modal__wrapper md:block sm:block xs:block"
    >
      <div>
        <p class="text-xl leading-6 font-medium xl:mb-12 mb-10 xs:hidden">menu</p>
        <div class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6">
          <nuxt-link
            to="/cases"
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
            @click.native="$store.commit('toggleMenu')"
          >
            Cases
          </nuxt-link>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </div>
        <nuxt-link
          :to="{ path: '/', hash: '#processes' }"
          class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6"
          @click.native="handleSectionClick(7)"
        >
          <p
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
          >
            Processes
          </p>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </nuxt-link>
        <div class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6">
          <nuxt-link
            to="/services-solutions"
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
            @click.native="$store.commit('toggleMenu')"
          >
            Services & Solutions
          </nuxt-link>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </div>
        <nuxt-link
          to="/"
          class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6"
          @click.native="handleSectionClick(8)"
        >
          <p
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
          >
            Super Deals
          </p>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#technologies' }"
          class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6"
          @click.native="handleSectionClick(6)"
        >
          <p
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
          >
            Technologies
          </p>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </nuxt-link>
        <div class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6">
          <nuxt-link
            to="/commerce"
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
            @click.native="$store.commit('toggleMenu')"
          >
            E-commerce
          </nuxt-link>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </div>
        <div class="menu-modal__item-wrapper flex items-center gap-4 mb-10 xs:mb-6">
          <p
            class="menu-modal__item lg:text-3xl lg:leading-10 font-medium sm:text-2xl sm:leading-7 xs:text-xl xs:leading-6"
          >
            Mission
          </p>
          <div class="w-5 h-5 bg-white rounded-full flex justify-center items-center">
            <LazyImage width="10" height="10" src="menu/arrow.svg" />
          </div>
        </div>
      </div>
      <div
        class="menu-modal__contact-wrapper rounded-20 bg-gray-7 hidden lg:block xl:block px-14 pt-14 pb-16 lg:px-8 lg:pt-6"
      >
        <p class="font-bold text-3xl leading-10">Contact us</p>
        <p class="mt-2 text-2xl leading-7 lg:text-xl lg:leading-6">
          We will reply within <span class="font-semibold">1 day!</span>
        </p>
        <input
          class="bg-transparent outline-none w-full leading-5 h-8 mt-14 border-b border-gray-8 xl:text-xl xl:leading-6"
          placeholder="Your name"
        />
        <input
          class="bg-transparent outline-none w-full leading-5 h-8 mt-14 border-b border-gray-8 xl:text-xl xl:leading-6"
          placeholder="Corporate email"
        />
        <input
          class="bg-transparent outline-none w-full leading-5 h-8 mt-14 border-b border-gray-8 xl:text-xl xl:leading-6"
          placeholder="Contact number"
        />
        <div class="flex items-center gap-2 mt-16" @click="isChecked = !isChecked">
          <div class="w-6 h-6 flex items-center justify-center rounded-5 bg-white">
            <LazyImage width="14" height="8.5" src="menu/checkbox.svg" :class="{ 'opacity-0': !isChecked }" />
          </div>
          <p class="leading-5 font-medium">I want to protect my data by signing an NDA</p>
        </div>
        <button
          style="width: 232px"
          class="rounded-100 bg-white mt-6 h-16 text-black flex justify-center items-center text-xl leading-6 font-medium"
        >
          Send request
        </button>
      </div>
      <button
        class="hidden xs:block w-full h-12 rounded-100 bg-white flex justify-center items-center text-black text-xl leading-6 font-medium mt-16"
      >
        Contact Us
      </button>
      <div
        class="menu-modal__social xs:w-full mt-32 sm:mt-16 xs:mt-8 mx-auto hidden md:flex sm:flex xs:flex xs:items-start flex-col items-center"
      >
        <div class="flex gap-10 mx-auto xs:hidden">
          <p class="text-2xl leading-6 font-semibold text-yellow-1">En</p>
          <p class="text-2xl leading-6 font-semibold">Es</p>
        </div>
        <p class="mt-8 text-center xs:text-left font-semibold text-xl leading-6 xs:font-normal">+7 (999) 000 00 00</p>
        <div class="mt-8 xs:mt-6 xs:w-auto xs:gap-4 flex justify-between items-center w-full">
          <LazyImage v-for="social in socials" :key="social" width="32" height="32" :src="`menu/${social}.svg`" />
        </div>
        <p class="text-center xs:text-left mt-8 text-gray-2 text-sm leading-4 tracking-tight">
          © XTR solutions. All rights reserved. 2022
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuModal',
  data() {
    return {
      nameValue: '',
      emailValue: '',
      numberValue: '',
      isChecked: false,
      socials: ['facebook', 'twitter', 'instagram', 'telegram'],
    }
  },
  methods: {
    handleSectionClick(section) {
      this.$store.commit('toggleMenu')
      this.$store.commit('setSection', section)
    },
  },
}
</script>

<style lang="scss">
.menu-modal {
  &__wrapper {
    gap: 263px;
    @media (max-width: 1919px) {
      gap: 182px;
    }
    @media (max-width: 1199px) {
      margin-top: 221px;
    }
    @media (max-width: 1023px) {
      margin-top: 156px;
    }
  }
  &__item {
    font-size: 44px;
    line-height: 50px;
  }
  &__item-wrapper:hover {
    & a,
    & p {
      color: #fff500 !important;
    }
    & > div {
      background-color: #fff500 !important;
    }
  }

  &__contact-wrapper {
    width: 712px;
    @media (max-width: 1919px) {
      width: 510px;
    }
    input::placeholder {
      color: #a3a3a3;
      transition: all 500ms;
    }
    input:focus::placeholder {
      transform: translateX(7px);
    }
  }

  &__social {
    width: 280px;
  }
}
</style>
