import Vue from 'vue';
import Slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

if (process.client) {
  window.Slick = Slick;
}
