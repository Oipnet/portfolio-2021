import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll';

console.log('smoth')
Vue.use(vueSmoothScroll, {
  duration: 400,
  updateHistory: false,
});