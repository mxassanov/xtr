<template>
  <div class="case-header px-24 md:px-16 sm:px-8 xs:px-6 xs:pb-8 bg-light-gray text-black relative">
    <Navbar class="absolute top-0 left-0" />
    <div class="flex justify-between sm:flex-col xs:flex-col sm:gap-4 xs:gap-4">
      <h1 class="case-header__title font-medium">Cases</h1>
      <div>
        <p class="case-header__subtext xs:w-full leading-5 font-medium mt-16 md:mt-10 sm:mt-0 xs:mt-0">
          Become a leader in your segment through innovative product development, unique design and UI/UX, effective
          digital marketing and it-development
        </p>
        <div class="mt-4 flex items-center">
          <LazyImage width="48" height="48" src="cases/header/qoutes.svg" />
          <LazyImage width="48" height="48" src="cases/header/founder.png" class="relative -left-3" />
          <div class="relative -left-1.5">
            <p class="font-bold text-sm leading-4">Ilya Trofimenko</p>
            <p class="text-gray-9 text-sm leading-4">co-founder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/NavbarNotMain.vue'

export default {
  name: 'Header',
  components: { Navbar },
}
</script>

<style lang="scss">
.case-header {
  padding-top: 216px;
  padding-bottom: 125px;
  @media (max-width: 1199px) {
    padding-top: 213px;
    padding-bottom: 202px;
  }
  @media (max-width: 1023px) {
    padding-top: 210px;
    padding-bottom: 100px;
  }
  @media (max-width: 743px) {
    padding-top: 138px;
  }

  &__title {
    font-size: 100px;
    line-height: 121px;
    @media (max-width: 1199px) {
      font-size: 90px;
      line-height: 109px;
    }
    @media (max-width: 743px) {
      font-size: 50px;
      line-height: 60px;
    }
  }

  &__subtext {
    width: 515px;
    @media (max-width: 1199px) {
      width: 440px;
    }
  }
}
</style>