import Swiper from 'swiper';
import { Keyboard, Autoplay } from 'swiper/modules';

import '../styles/plugins/swiper.scss';

const swiper = new Swiper('.swiper', {
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
