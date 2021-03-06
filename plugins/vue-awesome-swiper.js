import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Autoplay])

Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(VueAwesomeSwiper)
