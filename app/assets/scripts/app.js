import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
/* ponieważ chcę aby elementy pojawiały się w różnym momencie scrollowania dodaje 2 instances klasy RevealOnScroll z dwoma innymi elemetami, trzeba pamiętać aby dodać również jquery na górze, idż do RevealOnScroll.js  */
 new RevealOnScroll($('.feature-item'), '85%');
 new RevealOnScroll($('.testimonial'), '60%');
