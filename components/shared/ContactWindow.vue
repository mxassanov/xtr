<template>
  <transition :name="scrollDirection === 'down' ? 'contact-down' : 'contact-up'">
    <div
      ref="mainContainer"
      v-show="isVisible"
      class="contact w-full top-0 left-0"
      :class="order === 'default' ? 'bg-black' : 'absolute h-screen '"
    >
      <div
        ref="scrollContainer"
        class="contact overflow-y-scroll w-full h-full text-white pt-32 px-24 md:px-16 sm:px-8 xs:px-6 xs:pt-10 flex flex-col"
      >
        <div class="grid grid-cols-3 items-center contact__top-text xs:grid-cols-1 xs:items-start xs:gap-2">
          <p class="text-3xl font-bold leading-10 text-white">Contact us</p>
          <p class="leading-5 contact__subtext xs:ml-0 col-span-2">
            Need a hand with Back-end development? Fill out the form below to receive a free consultation and find out
            how Andersen can help your business grow
          </p>
        </div>
        <form @submit.prevent="onSubmit">
          <div class="lg:flex xl:flex mt-10 xl:mt-16 contact__container">
            <div
              class="lg:w-7/12 xl:w-7/12 lg:h-full xl:h-full bg-white rounded-tl-20 md:rounded-t-20 sm:rounded-t-20 xs:rounded-20 px-16 pt-12 lg:px-12 pb-16 xs:px-3 xs:py-8"
            >
              <p class="text-black text-2xl xs:text-xl xs:leading-6 xs:font-semibold leading-7">
                We will reply within <span class="font-semibold">1 day!</span>
              </p>
              <div class="contact__field">
                <input
                  v-model="name"
                  placeholder="Your name"
                  class="contact__input h-7 w-full bg-transparent outline-none border-b border-gray-2 leading-5 text-black mt-14 font-medium"
                  type="text"
                  @blur="$v.name.$touch()"
                />
                <span v-if="$v.name.$error" class="text-black">
                  <template v-if="!$v.name.maxLength">
                    Name length must not exceed {{ $v.name.$params.maxLength.max }} symbols
                  </template>
                  <template v-else> Sorry, name is incorrect</template>
                </span>
              </div>
              <div class="contact__field">
                <input
                  v-model="email"
                  placeholder="Corporate email"
                  class="contact__input h-7 w-full bg-transparent outline-none border-b border-gray-2 leading-5 text-black mt-14 font-medium"
                  type="text"
                  @blur="$v.email.$touch()"
                />
                <span v-if="$v.email.$error" class="text-black">Please, enter correct email</span>
              </div>
              <div class="contact__field">
                <input
                  v-model="phone"
                  placeholder="Contact number"
                  class="contact__input h-7 w-full bg-transparent outline-none border-b border-gray-2 leading-5 text-black mt-14 font-medium"
                  type="number"
                  @blur="$v.phone.$touch()"
                />
                <span v-if="$v.phone.$error" class="text-black">Phone number type is incorrect</span>
              </div>
              <input
                v-model="comments"
                maxlength="50"
                placeholder="Comments"
                class="contact__input h-7 w-full bg-transparent outline-none border-b border-gray-2 leading-5 text-black mt-14 font-medium"
              />
              <div class="mt-20 flex gap-2 items-center">
                <div
                  class="bg-black w-6 min-w-6 h-6 rounded-5 flex justify-center items-center"
                  @click="isChecked = !isChecked"
                >
                  <LazyImage src="shared/checkbox.svg" :class="{ 'opacity-0': !isChecked }" />
                </div>
                <p class="text-gray-5 leading-5 font-medium xs:text-sm xs:font-normal">
                  I want to protect my data by signing an NDA
                </p>
              </div>
              <button
                class="bg-black mt-6 text-white text-xl leading-6 font-medium flex justify-center items-center py-4 w-60 rounded-100 xs:w-full"
              >
                Send request
              </button>
            </div>
            <div
              class="lg:w-5/12 xl:w-5/12 relative lg:rounded-tr-20 xl:rounded-tr-20 overflow-hidden pl-24 lg:pl-12 lg:pt-10 lg:pr-8 pt-32 pr-40 md:py-12 md:px-16 md:rounded-b-20 sm:py-12 sm:px-16 sm:rounded-b-20 xs:p-0 xs:mt-8"
            >
              <LazyImage
                src="shared/contact-bg.png"
                class="absolute top-0 left-0 w-full h-full object-cover xs:hidden"
              />
              <p class="font-semibold text-xl leading-6 relative z-1">What happens next?</p>
              <div class="mt-4 flex flex-col gap-5 relative z-1 xs:pl-6">
                <div v-for="(contact, index) in contactList" :key="contact" class="flex">
                  <p class="font-semibold leading-6">{{ index + 1 }}/</p>
                  <p class="flex-1 leading-6">{{ contact }}</p>
                </div>
                <div
                  class="absolute top-0 -left-4 xs:left-2 bg-white h-full w-0.5 flex flex-col items-center justify-between"
                >
                  <div v-for="n in contactList.length" :key="n" class="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>
              </div>
              <p class="relative z-1 mt-20 leading-6 xs:hidden">
                This site is protected by reCAPTCHA and the Google <span class="font-semibold">Privacy Policy</span> and
                <span class="font-semibold"> Terms of Service</span>
                apply.
              </p>
            </div>
          </div>
        </form>
        <Footer v-if="isLast" class="contact__footer" />
      </div>
      <a ref="mail" :href="`mailto:n@x-t-r.com,i@x-t-r.com,m@x-t-r.com?body=${mailData}`" />
    </div>
  </transition>
</template>

<script>
import changeCurrentSection from '~/mixins/changeCurrentSection'
import vuelidateValidForms from '~/mixins/vuelidateValidForms'
import Footer from '@/components/Footer'

export default {
  name: 'ContactWindow',
  components: { Footer },
  mixins: [changeCurrentSection, vuelidateValidForms],
  props: {
    order: {
      type: [Number, String],
      default: '',
    },
    isLast: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      comments: null,
      contactList: [
        'Our expert contacts you shortly after having analyzed your business requirements',
        'When required by you, we sign an NDA to ensure the highest privacy level',
        'Our pre-sales manager submits a comprehensive project proposal. It may include estimates, timelines, lists of CVs, etc., for a particular situation',
        'The team assembled for your IT project can start delivering within ten business days',
      ],
    }
  },
  computed: {
    isVisible() {
      return this.currentSection === this.$props.order || this.$props.order === 'default'
    },
    currentSection() {
      return this.$store.state.indexCurrentSection
    },
    scrollDirection() {
      return this.$store.state.indexScrollDirection
    },
    mailData() {
      return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Comments: ${this.comments}, Checked: ${this.isChecked}`
    },
  },
  watch: {
    isVisible(value) {
      if (value) this.$store.commit('changeBgColor', 'black')
    },
  },
  methods: {
    onSubmit() {
      this.$refs.mail.click()
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  &__field {
    max-height: 84px;
  }
  &__subtext {
    @media (min-width: 1075px) {
      width: 620px;
    }
  }

  &__input {
    &::placeholder {
      color: #727272;
      transition: all 600ms;
    }
    &:focus::placeholder {
      transform: translateX(7px);
    }
  }
}

.contact-down {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
  }
  &-enter {
    .contact__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .contact__container,
    .contact__footer {
      transform: translateY(100vh);
    }
  }
  &-leave-to {
    .contact__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .contact__container,
    .contact__footer {
      transform: translateY(-100vh);
    }
  }
}

.contact-up {
  &-leave-active,
  &-enter-active,
  &-leave-active *,
  &-enter-active * {
    transition: all 1000ms;
  }
  &-enter {
    .contact__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .contact__container,
    .contact__footer {
      transform: translateY(-100vh);
    }
  }
  &-leave-to {
    .contact__top-text {
      transform: scaleY(0.1);
      opacity: 0;
    }
    .contact__container,
    .contact__footer {
      transform: translateY(100vh);
    }
  }
}
</style>
