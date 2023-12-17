import Swiper from 'swiper';
import { Keyboard, Autoplay } from 'swiper/modules';

import '../styles/plugins/swiper.scss';

const swiperProducts = new Swiper('.products-swiper', {
  modules: [Keyboard, Autoplay],
  keyboard: {
    enabled: true,
  },
  autoplay: {
    enabled: true,
    delay: 3000,
  },
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 48,
  grabCursor: true,
});

const swiperTemplate = new Swiper('.template__swiper', {
  modules: [Keyboard, Autoplay],
  keyboard: {
    enabled: true,
  },
  autoplay: {
    enabled: false,
    delay: 2000,
  },
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,
});
